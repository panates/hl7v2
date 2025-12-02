import { HL7DataTypeDefinition, HL7FieldDefinition } from 'hl7v2-dictionary';
import type { Hl7Component } from './hl7-component.js';
import type { HL7Message } from './hl7-message.js';
import {
  HL7Repetition,
  HL7RepetitionParseOptions,
  type HL7RepetitionSerializeOptions,
} from './hl7-repetition.js';
import type { HL7Segment } from './hl7-segment.js';
import { Hl7SubComponent } from './hl7-sub-component.js';

export class HL7Field {
  declare protected _repetitions: HL7Repetition[];
  declare protected _definition: HL7FieldDefinition;
  declare protected _typeDef: HL7DataTypeDefinition;
  readonly segment: HL7Segment;
  readonly position: number;

  constructor(segment: HL7Segment, position: number, def: HL7FieldDefinition) {
    this.segment = segment;
    this.position = position;
    this._definition = def;
    this._typeDef = this.message.dictionary.types[this._definition.type];
    if (!this._typeDef)
      throw new Error(`Unknown data type: ${this._definition.type}`);
    this.clear();
  }

  get message(): HL7Message {
    return this.segment.message;
  }

  get definition(): HL7FieldDefinition {
    return this._definition;
  }

  get typeDef(): HL7DataTypeDefinition {
    return this._typeDef;
  }

  get isPrimitive(): boolean {
    return !this.typeDef.fields;
  }

  get repetitions(): HL7Repetition[] {
    return this._repetitions;
  }

  add(): HL7Repetition {
    const rep = new HL7Repetition(this);
    this._repetitions.push(rep);
    return rep;
  }

  clear() {
    this._repetitions = [];
  }

  isEmpty(): boolean {
    for (const rep of this._repetitions) {
      if (!rep.isEmpty()) return false;
    }
    return true;
  }

  repetition(repetitionIndex: number = 0): HL7Repetition {
    while (repetitionIndex >= this._repetitions.length) this.add();
    return this._repetitions[repetitionIndex]!;
  }

  component(position: number): Hl7Component {
    return this.repetition(0).comp(position);
  }

  subComponent(componentPos: number, subComponentPos: number): Hl7SubComponent {
    return this.repetition(0).comp(componentPos).subcomp(subComponentPos);
  }

  /**
   * Alias of .repetition()
   */
  rep(repetitionIndex: number = 0): HL7Repetition {
    return this.repetition(repetitionIndex);
  }

  /**
   * Alias of .component()
   */
  comp(position: number): Hl7Component {
    return this.component(position);
  }

  /**
   * Alias of .subComponent()
   */
  subcomp(componentPos: number, subComponentPos: number): Hl7SubComponent {
    return this.subComponent(componentPos, subComponentPos);
  }

  getValue(component?: number, subComponent?: number): any {
    return this._repetitions[0]?.getValue(component, subComponent);
  }

  setValue(value: any, component?: number, subComponent?: number): any {
    return this.repetition(0).setValue(value, component, subComponent);
  }

  fromHL7String(value: string, options?: Hl7FieldParseOptions) {
    const components = value.split(this.message.repetitionSeparator);
    this._repetitions = [];
    for (const cmp of components) {
      this.add().fromHL7String(cmp, options);
    }
  }

  toHL7String(options?: Hl7FieldSerializeOptions) {
    if (!this._repetitions.length) return '';
    const { repetitionSeparator } = this.segment.message;
    let str = this._repetitions
      .map(component => component.toHL7String(options))
      .join(repetitionSeparator);
    while (str.endsWith(repetitionSeparator))
      str = str.substring(0, str.length - 1);
    if (options?.serializeField) {
      return options.serializeField(this, str, options) || '';
    }
    return str;
  }

  [Symbol.toStringTag]() {
    return this.toHL7String();
  }
}

export interface Hl7FieldParseOptions extends HL7RepetitionParseOptions {}

export interface Hl7FieldSerializeOptions extends HL7RepetitionSerializeOptions {
  serializeField?: (
    field: HL7Field,
    serializedString: string,
    options?: Hl7FieldSerializeOptions,
  ) => string;
}

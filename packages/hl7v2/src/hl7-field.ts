import type {
  HL7DataTypeDefinition,
  HL7FieldDefinition,
} from 'hl7v2-dictionary';
import type { Hl7Component } from './hl7-component.js';
import type { HL7Message } from './hl7-message.js';
import {
  HL7Repetition,
  type HL7RepetitionParseOptions,
  type HL7RepetitionSerializeOptions,
} from './hl7-repetition.js';
import type { HL7Segment } from './hl7-segment.js';
import type { Hl7SubComponent } from './hl7-sub-component.js';

/**
 * A field. K is the component positions comp(), getValue() and setValue()
 * take: any number, or for a field of a message whose version the compiler
 * knows, those of the field's data type in that version (a primitive's only
 * one is 1).
 */
export class HL7Field<K extends number = number> {
  declare protected _repetitions: HL7Repetition<K>[];
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

  get repetitions(): HL7Repetition<K>[] {
    return this._repetitions;
  }

  add(): HL7Repetition<K> {
    const rep = new HL7Repetition(this) as HL7Repetition<K>;
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

  repetition(repetitionIndex: number = 0): HL7Repetition<K> {
    while (repetitionIndex >= this._repetitions.length) this.add();
    return this._repetitions[repetitionIndex]!;
  }

  component(position: K): Hl7Component {
    return this.repetition(0).comp(position);
  }

  subComponent(componentPos: K, subComponentPos: number): Hl7SubComponent {
    return this.repetition(0).comp(componentPos).subcomp(subComponentPos);
  }

  /**
   * Alias of .repetition()
   */
  rep(repetitionIndex: number = 0): HL7Repetition<K> {
    return this.repetition(repetitionIndex);
  }

  /**
   * Alias of .component()
   */
  comp(position: K): Hl7Component {
    return this.component(position);
  }

  /**
   * Alias of .subComponent()
   */
  subcomp(componentPos: K, subComponentPos: number): Hl7SubComponent {
    return this.subComponent(componentPos, subComponentPos);
  }

  /**
   * The value as a Date, for a DT, DTM or TS value (see parseHL7DateTime):
   * read in its offset, or as local time without one. Undefined when empty.
   */
  getDate(component?: K, subComponent?: number): Date | undefined {
    return this._repetitions[0]?.getDate(component, subComponent);
  }

  getValue(component?: K, subComponent?: number): any {
    return this._repetitions[0]?.getValue(component, subComponent);
  }

  setValue(value: any, component?: K, subComponent?: number): any {
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

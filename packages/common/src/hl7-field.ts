import type { Hl7Component } from './hl7-component.js';
import type { HL7Message } from './hl7-message.js';
import {
  HL7Repetition,
  type HL7RepetitionSerializeOptions,
} from './hl7-repetition.js';
import type { HL7Segment } from './hl7-segment.js';
import type {
  HL7DataTypeDefinition,
  HL7FieldDefinition,
} from './interfaces/index.js';

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

  get value(): any | undefined {
    return this._repetitions[0]?.value;
  }

  set value(value: any | undefined) {
    this.component()!.value = value;
  }

  valueOf(component?: number, subComponent?: number): any {
    return this._repetitions[0]?.valueOf(component, subComponent);
  }

  add(): HL7Repetition {
    const rep = new HL7Repetition(this);
    this._repetitions.push(rep);
    return rep;
  }

  repetition(repetitionIndex: number = 0): HL7Repetition {
    while (repetitionIndex >= this._repetitions.length) this.add();
    return this._repetitions[repetitionIndex]!;
  }

  component(position: number = 1, repetitionIndex: number = 0): Hl7Component {
    const rep = this.repetition(repetitionIndex);
    return rep.component(position);
  }

  clear() {
    this._repetitions = [];
  }

  fromHL7String(value: string) {
    const components = value.split(this.message.repetitionSeparator);
    this._repetitions = [];
    for (const cmp of components) {
      this.add().fromHL7String(cmp);
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

export interface Hl7FieldSerializeOptions
  extends HL7RepetitionSerializeOptions {
  serializeField?: (
    field: HL7Field,
    serializedString: string,
    options?: Hl7FieldSerializeOptions,
  ) => string;
}

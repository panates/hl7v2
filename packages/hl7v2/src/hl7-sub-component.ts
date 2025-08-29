import {
  HL7DataTypeDefinition,
  HL7FieldDefinition,
  toHL7DateTime,
} from 'hl7v2-dictionary';
import type { Hl7Component } from './hl7-component.js';
import { HL7Error } from './hl7-error.js';
import type { HL7Field } from './hl7-field.js';
import type { HL7Message } from './hl7-message.js';
import type { HL7Segment } from './hl7-segment.js';
import { hl7Escape, hl7UnEscape } from './utils/hl7-escape.js';

export class Hl7SubComponent {
  declare protected _definition: HL7FieldDefinition;
  declare protected _typeDef: HL7DataTypeDefinition;
  readonly component: Hl7Component;
  readonly position: number;
  protected _value?: any;

  constructor(
    component: Hl7Component,
    position: number,
    def: HL7FieldDefinition,
  ) {
    this.component = component;
    this.position = position;
    this._definition = def;
    this._typeDef = this.field.message.dictionary.types[this._definition.type];
    if (!this._typeDef)
      /* c8 ignore next */
      throw new Error(`Unknown data type: ${this._definition.type}`);
  }

  get message(): HL7Message {
    return this.field.message;
  }

  get segment(): HL7Segment {
    return this.field.segment;
  }

  get field(): HL7Field {
    return this.component.field;
  }

  get definition(): HL7FieldDefinition {
    return this._definition;
  }

  get typeDef(): HL7DataTypeDefinition {
    return this._typeDef;
  }

  get value(): any | undefined {
    return this._value;
  }

  set value(value: any) {
    const decode = this.definition.decode || this.typeDef.decode;
    this._value = decode && value != null ? decode(value) : value;
  }

  isEmpty(): boolean {
    return this._value == null;
  }

  fromHL7String(value: string) {
    this._value = undefined;
    if (!value) return;
    const unescaped = hl7UnEscape(value, this.field.message);
    try {
      if (Buffer.isBuffer(unescaped) || unescaped == null)
        this.value = unescaped;
      else {
        const decode = this.definition.decode || this.typeDef.decode;
        this.value = decode ? decode(unescaped) : unescaped;
      }
    } catch (e: any) {
      const location = `${this.segment.segmentType}.${this.field.position}.${this.component.position}.${this.position}[${this.component.repetition.index}]`;
      let segmentIndex = this.segment.index;
      if (segmentIndex < 0) segmentIndex = this.message.segments.length;
      throw new HL7Error(
        `The field (${location}) contained data of the wrong data type. ${e.message}.`,
        {
          segmentType: this.segment.segmentType,
          segmentSequence: segmentIndex,
          fieldPosition: this.field.position,
          componentPosition: this.component.position,
          subComponentPosition: this.position,
          repetitionIndex: this.component.repetition.index,
          hl7ErrorCode: 102,
        },
      );
    }
  }

  toHL7String(options?: Hl7SubComponentSerializeOptions) {
    const encode = this.definition.encode || this.typeDef.encode;
    let v = this.value;
    if (v === null) return '""';
    if (v === undefined) return '';
    if (encode) v = encode(v);
    else {
      if (typeof v === 'object' && v instanceof Date) v = toHL7DateTime(v);
    }
    const str = hl7Escape(v, this.field.message);
    if (options?.serializeSubComponent)
      return String(options?.serializeSubComponent(this, str, options) || '');
    return str;
  }

  [Symbol.toStringTag]() {
    return this.toHL7String();
  }
}

export interface Hl7SubComponentSerializeOptions {
  serializeSubComponent?: (
    subComponent: Hl7SubComponent,
    serializedString: string,
    options?: Hl7SubComponentSerializeOptions,
  ) => string;
}

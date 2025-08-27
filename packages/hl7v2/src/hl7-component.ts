import {
  HL7DataTypeDefinition,
  HL7FieldDefinition,
  toHL7DateTime,
} from 'hl7v2-dictionary';
import { HL7Error } from './hl7-error.js';
import type { HL7Field } from './hl7-field.js';
import type { HL7Message } from './hl7-message.js';
import type { HL7Repetition } from './hl7-repetition.js';
import type { HL7Segment } from './hl7-segment.js';
import {
  Hl7SubComponent,
  type Hl7SubComponentSerializeOptions,
} from './hl7-sub-component.js';
import { hl7Escape, hl7UnEscape } from './utils/hl7-escape.js';

export class Hl7Component {
  declare protected _subComponents?: Hl7SubComponent[];
  declare protected _data?: Hl7SubComponent;
  declare protected _definition: HL7FieldDefinition;
  declare protected _typeDef: HL7DataTypeDefinition;
  readonly repetition: HL7Repetition;
  readonly position: number;

  constructor(
    repetition: HL7Repetition,
    position: number,
    def: HL7FieldDefinition,
  ) {
    this.repetition = repetition;
    this.position = position;
    this._definition = def;
    this._typeDef = this.message.dictionary.types[this._definition.type];
    if (!this._typeDef)
      throw new Error(`Unknown data type: ${this._definition.type}`);
    if (this.isPrimitive) {
      this._data = new Hl7SubComponent(this, 1, this.definition);
    }
    this.clear();
  }

  get message(): HL7Message {
    return this.field.message;
  }

  get segment(): HL7Segment {
    return this.field.segment;
  }

  get field(): HL7Field {
    return this.repetition.field;
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

  get subComponents(): Hl7SubComponent[] | undefined {
    return this._subComponents;
  }

  clear() {
    if (this.field.isPrimitive) {
      this._data!.value = undefined;
    } else this._subComponents = [];
  }

  subcomp(position: number): Hl7SubComponent {
    if (this.field.isPrimitive)
      throw new Error('Primitive fields have no sub-component');
    if (position < 1) throw new Error('Invalid sub-component position');
    let subComponent = this._subComponents![position - 1];
    if (!subComponent) {
      let fDef = this.typeDef.fields?.[String(position)];
      if (!fDef) {
        if (position === 1) fDef = this.definition;
        else
          fDef = {
            type: 'ST',
          };
      }
      subComponent = new Hl7SubComponent(this, position, fDef);
      this._subComponents![position - 1] = subComponent;
    }
    return subComponent;
  }

  getValue(subComponent?: number): any | undefined {
    if (this._data)
      return subComponent && subComponent > 1 ? undefined : this._data.value;
    return this._subComponents![(subComponent ?? 1) - 1]?.value;
  }

  setValue(value: any, subComponent?: number): this {
    if (subComponent || !this._data) {
      this.subcomp(subComponent || 1)!.value = value;
      return this;
    }
    this._data.value = value;
    return this;
  }

  fromHL7String(value: string) {
    if (value === '') {
      this.setValue(undefined);
      return;
    }
    if (this._data) {
      const decode = this.definition.decode || this.typeDef.decode;
      const unescaped = hl7UnEscape(value, this.field.message);
      try {
        if (Buffer.isBuffer(unescaped) || unescaped == null)
          this._data.value = unescaped;
        else this._data.value = decode ? decode(unescaped) : unescaped;
      } catch (e: any) {
        const location = `${this.segment.segmentType}.${this.field.position}.${this.position}[${this.repetition.index}]`;
        let segmentIndex = this.segment.index;
        if (segmentIndex < 0) segmentIndex = this.message.segments.length;
        const err = new HL7Error(
          `The field (${location}) contained data of the wrong data type. ${e.message}.`,
          {
            segmentType: this.segment.segmentType,
            segmentSequence: segmentIndex,
            fieldPosition: this.field.position,
            componentPosition: this.position,
            repetitionIndex: this.repetition.index,
            hl7ErrorCode: 102,
          },
        );
        err.stack = e.stack;
        throw err;
      }
      return;
    } else {
      this._subComponents = [];
      const subComponents = value.split(
        this.field.message.subComponentSeparator,
      );
      let pos = 1;
      for (const subComponent of subComponents) {
        this.subcomp(pos++)!.fromHL7String(subComponent);
      }
    }
  }

  toHL7String(options?: Hl7ComponentSerializeOptions) {
    let str: any;
    if (this._data) {
      let v = this._data.value;
      if (v === null) return '""';
      if (v === undefined) return '';
      const encode = this.definition.encode || this.typeDef.encode;
      if (encode) v = encode(v);
      else {
        if (typeof v === 'object' && v instanceof Date) v = toHL7DateTime(v);
      }
      str = hl7Escape(v, this.field.message);
    } else {
      const { subComponentSeparator } = this.segment.message;
      str = this._subComponents!.map(subComponent =>
        subComponent.toHL7String(options),
      ).join(subComponentSeparator);
      while (str.endsWith(subComponentSeparator))
        str = str.substring(0, str.length - 1);
    }
    if (options?.serializeComponent)
      return String(options?.serializeComponent(this, str, options) || '');
    return str;
  }

  [Symbol.toStringTag]() {
    return this.toHL7String();
  }
}

export interface Hl7ComponentSerializeOptions
  extends Hl7SubComponentSerializeOptions {
  serializeComponent?: (
    component: Hl7Component,
    serializedString: string,
    options?: Hl7ComponentSerializeOptions,
  ) => string;
}

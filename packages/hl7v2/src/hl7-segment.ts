import { HL7FieldDefinition, HL7SegmentDefinition } from 'hl7v2-dictionary';
import {
  HL7Field,
  Hl7FieldParseOptions,
  Hl7FieldSerializeOptions,
} from './hl7-field.js';
import type { HL7Message } from './hl7-message.js';

export class HL7Segment {
  declare protected _fields: HL7Field[];
  declare protected _definition: HL7SegmentDefinition;
  message: HL7Message;
  segmentType: string = '';

  constructor(message: HL7Message, segmentType: string) {
    this.message = message;
    this.segmentType = segmentType;
    this._definition = this.message.dictionary.segments[this.segmentType] || {
      fields: {},
    };
    this.clear();
  }

  get definition(): HL7SegmentDefinition {
    return this._definition;
  }

  get fields(): HL7Field[] {
    return this._fields;
  }

  get index(): number {
    return this.message.segments.indexOf(this);
  }

  clear() {
    this._fields = [];
  }

  field(fieldPos: number): HL7Field {
    if (fieldPos < 1) throw new Error('Invalid field position');
    let field = this._fields[fieldPos - 1];
    if (!field) {
      const fDef = this.definition.fields[String(fieldPos)] || {
        type: 'ST',
      };
      field = new HL7Field(this, fieldPos, fDef || { type: 'ST' });
      this._fields[fieldPos - 1] = field;
    }
    return field;
  }

  defineField(position: number, def: HL7FieldDefinition): HL7Field {
    if (position < 1) throw new Error(`Invalid field position (${position})`);
    def.type = def.type || 'ST';
    return (this._fields[position - 1] = new HL7Field(this, position, def));
  }

  next(segmentType?: string): HL7Segment | undefined {
    let index = this.index + 1;
    let segment = this.message.segments[index];
    while (segment) {
      if (!segmentType || segment.segmentType === segmentType) return segment;
      segment = this.message.segments[++index];
    }
  }

  toHL7String(options?: Hl7SegmentSerializeOptions) {
    const { fieldSeparator } = this.message;
    let out = this.segmentType + fieldSeparator;
    if (this.segmentType === 'MSH') {
      out +=
        this.message.componentSeparator +
        this.message.repetitionSeparator +
        this.message.escapeCharacter +
        this.message.subComponentSeparator +
        fieldSeparator;
    }
    const serializeFields = this._fields.map(field =>
      field.toHL7String(options),
    );
    if (this.segmentType === 'MSH') {
      serializeFields.shift();
      serializeFields.shift();
    }
    out += serializeFields.join(fieldSeparator);
    while (out.endsWith(fieldSeparator)) out = out.substring(0, out.length - 1);
    return out;
  }

  static parse(
    message: HL7Message,
    input: string,
    options?: Hl7SegmentParseOptions,
  ): HL7Segment {
    const fields = input.split(message.fieldSeparator);
    const segment = new HL7Segment(message, fields[0]);
    if (segment.segmentType === 'MSH') fields[0] = message.fieldSeparator;
    else fields.shift();
    for (let i = 0; i < fields.length; i++) {
      segment.field(i + 1).fromHL7String(fields[i], options);
    }
    return segment;
  }
}

export interface Hl7SegmentParseOptions extends Hl7FieldParseOptions {}

export interface Hl7SegmentSerializeOptions extends Hl7FieldSerializeOptions {
  serializeSegment?: (
    segment: HL7Segment,
    serializedString: string,
    options?: Hl7FieldSerializeOptions,
  ) => string;
}

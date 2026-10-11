import type {
  HL7FieldDefinition,
  HL7SegmentDefinition,
} from 'hl7v2-dictionary';
import type {
  Hl7FieldParseOptions,
  Hl7FieldSerializeOptions,
} from './hl7-field.js';
import { HL7Field } from './hl7-field.js';
import type { HL7Message } from './hl7-message.js';
import { assignSegment, segmentToObject } from './hl7-object.js';

/**
 * Segments whose first two fields are the delimiters themselves, written
 * right after the segment ID: MSH, and the batch headers FHS and BHS
 */
export function isHeaderSegment(segmentType: string): boolean {
  return (
    segmentType === 'MSH' || segmentType === 'FHS' || segmentType === 'BHS'
  );
}

/**
 * A segment. P is the field positions field() takes and O the object
 * toObject() gives and assign() takes: any number and any object, or for a
 * message whose version the compiler knows, what that version defines -
 * getSegment('DG1') of a 2.6 message leaves out DG1-2, withdrawn in 2.6 (see
 * HL7MessageSegment).
 */
export class HL7Segment<
  P extends number = number,
  O extends object = Record<string, any>,
  C extends { [field: number]: number } = { [field: number]: number },
> {
  declare protected _fields: HL7Field[];
  declare protected _definition: HL7SegmentDefinition;
  message: HL7Message<any>;
  segmentType: string = '';

  constructor(message: HL7Message<any>, segmentType: string) {
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

  /**
   * The segment's occurrence among its message's segments of its type, from
   * 1 - ERL-2's "segment sequence". A segment not yet in its message (one
   * being parsed) is the next one.
   */
  get sequence(): number {
    let n = 0;
    for (const seg of this.message.segments) {
      if (seg.segmentType === this.segmentType) n++;
      if (seg === this) return n;
    }
    return n + 1;
  }

  clear() {
    this._fields = [];
  }

  field<F extends P>(fieldPos: F): HL7Field<C[F] & number> {
    if (fieldPos < 1) throw new Error('Invalid field position');
    let field = this._fields[fieldPos - 1];
    if (!field) {
      const fDef = this.definition.fields[String(fieldPos)] || {
        type: 'ST',
      };
      field = new HL7Field(this, fieldPos, fDef || { type: 'ST' });
      this._fields[fieldPos - 1] = field;
    }
    return field as HL7Field<C[F] & number>;
  }

  defineField(position: number, def: HL7FieldDefinition): HL7Field {
    if (position < 1) throw new Error(`Invalid field position (${position})`);
    def.type = def.type || 'ST';
    return (this._fields[position - 1] = new HL7Field(this, position, def));
  }

  toHL7String(options?: Hl7SegmentSerializeOptions) {
    const { fieldSeparator } = this.message;
    let out = this.segmentType + fieldSeparator;
    if (isHeaderSegment(this.segmentType)) {
      out +=
        this.message.componentSeparator +
        this.message.repetitionSeparator +
        this.message.escapeCharacter +
        this.message.subComponentSeparator +
        (this.message.truncationCharacter || '') +
        fieldSeparator;
    }
    const serializeFields = this._fields.map(field =>
      field.toHL7String(options),
    );
    if (isHeaderSegment(this.segmentType)) {
      serializeFields.shift();
      serializeFields.shift();
    }
    out += serializeFields.join(fieldSeparator);
    while (out.endsWith(fieldSeparator)) out = out.substring(0, out.length - 1);
    return out;
  }

  /**
   * The segment as a plain object keyed by field names - PIDSegment's
   * "PatientName" - typed by the segment's interface (PIDObject); see
   * hl7-object.ts
   */
  toObject<T extends object = O>(): T {
    return segmentToObject(this) as T;
  }

  /** Sets fields from an object shaped as toObject() makes it */
  assign<T extends object = O>(object: NoInfer<T>): this {
    assignSegment(this, object as Record<string, any>);
    return this;
  }

  static parse(
    message: HL7Message<any>,
    input: string,
    options?: Hl7SegmentParseOptions,
  ): HL7Segment {
    const fields = input.split(message.fieldSeparator);
    const segment = new HL7Segment(message, fields[0]);
    if (isHeaderSegment(segment.segmentType)) {
      fields[0] = message.fieldSeparator;
    } else fields.shift();
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

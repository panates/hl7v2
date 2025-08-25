import {
  AcknowledgmentCode,
  dictionaries as defaultDictionaries,
  ERLType,
  ERRSegment,
  findNearestHL7Version,
  HL7Dictionary,
  HL7Version,
  MSASegment,
  MSHSegment,
} from 'hl7v2-dictionary';
import iconv from 'iconv-lite';
import { uid } from 'uid';
import {
  COMPONENT_SEPARATOR,
  CR,
  ESCAPE_CHARACTER,
  FIELD_SEPARATOR,
  FS,
  REPETITION_SEPARATOR,
  SUBCOMPONENT_SEPARATOR,
  VT,
} from './constants.js';
import { HL7Error } from './hl7-error.js';
import { HL7Segment, Hl7SegmentSerializeOptions } from './hl7-segment.js';

export class HL7Message {
  private readonly _dictionaries: Record<string, HL7Dictionary>;
  declare protected _segments: HL7Segment[];
  declare protected _dictionary: HL7Dictionary;
  protected _version: HL7Version;
  fieldSeparator: string = FIELD_SEPARATOR;
  componentSeparator: string = COMPONENT_SEPARATOR;
  subComponentSeparator: string = SUBCOMPONENT_SEPARATOR;
  repetitionSeparator: string = REPETITION_SEPARATOR;
  escapeCharacter: string = ESCAPE_CHARACTER;
  carriageReturn: string = CR;

  constructor(
    version: HL7Version = HL7Version.v2_7_1,
    dictionaries?: Record<string, HL7Dictionary>,
  ) {
    this._dictionaries = dictionaries || defaultDictionaries;
    this._version = version;
    this.clear(version);
  }

  get dictionary(): HL7Dictionary {
    return this._dictionary;
  }

  get segments(): HL7Segment[] {
    return this._segments;
  }

  get header(): HL7Segment {
    return this.getSegment('MSH')!;
  }

  get version(): HL7Version {
    return this._version;
  }

  get messageType(): string {
    return this.header.field(MSHSegment.MessageType).toHL7String();
  }

  get controlId(): string {
    return this.header.field(MSHSegment.MessageControlID).toHL7String();
  }

  clear(version?: HL7Version) {
    if (!version) version = this._version || HL7Version.v2_7_1;
    this._version = version;
    const nearestVersion = findNearestHL7Version(version);
    this._dictionary = this._dictionaries[nearestVersion];
    this._segments = [];
    const msh = this.addSegment('MSH');
    msh.field(MSHSegment.DateTimeOfMessage).setValue(new Date());
    msh.field(MSHSegment.MessageControlID).setValue(uid(8));
    msh.field(MSHSegment.VersionID).setValue(version);
    msh.field(MSHSegment.CharacterSet).setValue('UTF-8');
  }

  addSegment(segmentType: string, index?: number): HL7Segment {
    const segment = new HL7Segment(this, segmentType);
    if (index !== undefined && index < this.segments.length) {
      this.segments.splice(index, 0, segment);
    } else {
      this.segments.push(segment);
    }
    return segment;
  }

  /**
   * Searches for a segment of a given type
   */
  getSegment(segmentType: string, index: number = 0): HL7Segment | undefined {
    let k = 0;
    for (const seg of this.segments) {
      if (seg.segmentType === segmentType) {
        if (!index || index === k) return seg;
        k++;
      }
    }
  }

  /**
   * Searches for a segment of a given type in reverse order
   */
  getSegmentFromLast(
    segmentType: string,
    index: number = 0,
  ): HL7Segment | undefined {
    for (let k = this.segments.length - 1; k >= 0; k--) {
      const seg = this.segments[k];
      if (seg.segmentType === segmentType) {
        if (!index || index === k) return seg;
        k++;
      }
    }
  }

  toHL7String(options?: HL7MessageSerializeOptions) {
    return (
      this.segments
        .map(segment => segment.toHL7String(options))
        .filter(v => v)
        .join(this.carriageReturn) + this.carriageReturn
    );
  }

  parse(input: string | Buffer) {
    let headerStr = '';
    if (Buffer.isBuffer(input)) {
      let crIdx = input.indexOf(CR);
      if (crIdx < 0) crIdx = input.length;
      headerStr = input.toString('utf8', 0, crIdx);
    } else if (typeof input === 'string') {
      let crIdx = input.indexOf(CR);
      if (crIdx < 0) crIdx = input.length;
      headerStr = input.substring(0, crIdx);
    } /* c8 ignore else */ else {
      throw new TypeError('You must provide string or Buffer argument');
    }
    if (headerStr.startsWith(VT)) headerStr = headerStr.substring(1);
    if (!headerStr.startsWith('MSH'))
      throw new HL7Error('Message must start with (MSH) segment', {
        line: 1,
        hl7ErrorCode: 100,
      });
    const fieldSeparator = headerStr[3];
    /* Detect version and charset */
    const headerItems = headerStr.split(fieldSeparator);
    const version = headerItems[11];
    const encoding = headerItems[17]?.split('^')[0] || 'UTF-8';

    let str = Buffer.isBuffer(input) ? iconv.decode(input, encoding) : input;
    if (str.startsWith(VT)) str = str.substring(1);
    const k = str.indexOf(FS);
    if (k >= 0) str = str.substring(0, k);

    this.clear(version as HL7Version);
    this.fieldSeparator = fieldSeparator;
    this.componentSeparator = headerItems[1][0];
    this.repetitionSeparator = headerItems[1][1];
    this.escapeCharacter = headerItems[1][2];
    this.subComponentSeparator = headerItems[1][3];
    this._segments = [];

    const lines = str.split(CR);
    for (const [i, line] of lines.entries()) {
      if (!line) continue;
      try {
        const segment = HL7Segment.parse(this, line);
        this._segments.push(segment);
      } catch (e: any) {
        if (!this.header) {
          this.addSegment('MSH');
        }
        this.header
          .field(MSHSegment.SendingApplication)
          .setValue(headerItems[2]);
        this.header.field(MSHSegment.SendingFacility).setValue(headerItems[3]);
        this.header
          .field(MSHSegment.ReceivingApplication)
          .setValue(headerItems[4]);
        this.header
          .field(MSHSegment.ReceivingFacility)
          .setValue(headerItems[5]);
        this.header.field(MSHSegment.EncodingCharacters).setValue(encoding);
        this.header.field(MSHSegment.MessageControlID).setValue(headerItems[9]);
        this.header.field(MSHSegment.VersionID).setValue(version);
        /* c8 ignore next */
        const e1 = e instanceof HL7Error ? e : new HL7Error(e.message);
        if (e1.segmentType) {
          const lastSeg = this.getSegmentFromLast(e.segmentType);
          if (lastSeg) e1.segmentSequence = lastSeg.index;
        }
        e1.line = i + 1;
        throw e1;
      }
    }
  }

  createAck(
    ackCode: AcknowledgmentCode = 'AA',
    textMessage?: string | Error,
  ): HL7Message {
    const out = new HL7Message(this.version);
    const msh = out.header;
    // Sending Application
    msh
      .field(MSHSegment.ReceivingApplication)
      .setValue(msh.field(MSHSegment.SendingFacility).getValue());
    msh
      .field(MSHSegment.ReceivingFacility)
      .setValue(this.header.field(MSHSegment.SendingFacility).getValue());
    msh.field(MSHSegment.MessageType).setValue('ACK');
    msh
      .field(MSHSegment.MessageType)
      .comp(2)
      .setValue(this.header.field(MSHSegment.MessageType).getValue(2));
    msh
      .field(MSHSegment.MessageControlID)
      .setValue(String(Date.now() + uid(5)));

    const msa = out.addSegment('MSA');
    msa.field(MSASegment.AcknowledgmentCode).setValue(ackCode);
    msa
      .field(MSASegment.MessageControlID)
      .setValue(this.header.field(MSHSegment.MessageControlID).getValue());
    if (textMessage) {
      if (textMessage instanceof HL7Error) {
        msa.field(MSASegment.TextMessage).setValue(textMessage.message);
        const err = out.addSegment('ERR');
        err
          .field(ERRSegment.HL7ErrorCode)
          .setValue(textMessage.hl7ErrorCode || 207);
        err.field(ERRSegment.Severity).setValue(textMessage.severity);
        err
          .field(ERRSegment.ApplicationErrorCode)
          .setValue(textMessage.appErrorCode);
        const errLocation = err.field(ERRSegment.ErrorLocation);
        errLocation.comp(ERLType.SegmentID).setValue(textMessage.segmentType);
        errLocation
          .comp(ERLType.SegmentSequence)
          .setValue(textMessage.segmentSequence);
        errLocation
          .comp(ERLType.FieldPosition)
          .setValue(textMessage.fieldPosition);
        errLocation
          .comp(ERLType.ComponentNumber)
          .setValue(textMessage.componentPosition);
        errLocation
          .comp(ERLType.FieldRepetition)
          .setValue(textMessage.repetitionIndex);
        errLocation
          .comp(ERLType.SubComponentNumber)
          .setValue(textMessage.subComponentPosition);
      } else if (textMessage instanceof Error) {
        msa.field(MSASegment.TextMessage).setValue(textMessage.message);
        const err = out.addSegment('ERR');
        err.field(ERRSegment.HL7ErrorCode).setValue(207);
        err.field(ERRSegment.Severity).setValue('E');
        if ((textMessage as any).code)
          err
            .field(ERRSegment.ApplicationErrorCode)
            .setValue(textMessage as any);
      } else {
        msa.field(MSASegment.TextMessage).setValue(textMessage);
      }
    }
    return out;
  }

  /**
   *
   * @static
   */
  static parse(
    input: string | Buffer,
    dictionaries?: Record<string, HL7Dictionary>,
  ): HL7Message {
    const message = new HL7Message(undefined, dictionaries);
    message.parse(input);
    return message;
  }
}

export interface HL7MessageSerializeOptions
  extends Hl7SegmentSerializeOptions {}

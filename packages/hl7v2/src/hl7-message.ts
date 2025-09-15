import process from 'node:process';
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
  LF,
  REPETITION_SEPARATOR,
  SUBCOMPONENT_SEPARATOR,
  VT,
} from './constants.js';
import { HL7Error } from './hl7-error.js';
import {
  HL7Segment,
  Hl7SegmentParseOptions,
  Hl7SegmentSerializeOptions,
} from './hl7-segment.js';

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
    const f = this.header.field(MSHSegment.MessageType);
    if (!f) return '';
    return f.getValue(1) + '^' + f.getValue(2);
  }

  get controlId(): string {
    return this.header.field(MSHSegment.MessageControlID).toHL7String();
  }

  clear(version?: HL7Version) {
    this._clear(version);
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
        .join(CR) + CR
    );
  }

  parse(input: string | Buffer, options?: HL7MessageParseOptions) {
    const raw = HL7Message.parseRaw(input);
    this._clear(raw.version as HL7Version);
    this.fieldSeparator = raw.fieldSeparator;
    this.componentSeparator = raw.componentSeparator;
    this.repetitionSeparator = raw.repetitionSeparator;
    this.escapeCharacter = raw.escapeCharacter;
    this.subComponentSeparator = raw.subComponentSeparator;

    const lines = raw.data.replaceAll(CR + LF, CR).split(CR);
    const headerItems = raw.header.split(this.fieldSeparator);
    for (const [i, line] of lines.entries()) {
      if (!line) continue;
      try {
        const segment = HL7Segment.parse(this, line, options);
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
        this.header.field(MSHSegment.EncodingCharacters).setValue(raw.encoding);
        this.header.field(MSHSegment.MessageControlID).setValue(headerItems[9]);
        this.header.field(MSHSegment.VersionID).setValue(raw.version);
        /* c8 ignore next */
        const e1 = e instanceof HL7Error ? e : new HL7Error(e.message);
        e1.stack = e.stack;
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
    textMessage?: string,
  ): HL7Message {
    const out = new HL7Message(this.version, this._dictionaries);
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
    if (textMessage) msa.field(MSASegment.TextMessage).setValue(textMessage);
    return out;
  }

  createNak(errors: (Error | string)[]): HL7Message {
    const out = new HL7Message(this.version, this._dictionaries);
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

    const msaSegment = out.addSegment('MSA');
    msaSegment.field(MSASegment.AcknowledgmentCode).setValue('AE');
    msaSegment
      .field(MSASegment.MessageControlID)
      .setValue(this.header.field(MSHSegment.MessageControlID).getValue());
    for (const error of errors) {
      out.addError(error);
    }
    return out;
  }

  addError(error: Error | string) {
    let msaSegment = this.getSegment('MSA');
    if (!msaSegment) msaSegment = this.addSegment('MSA');
    if (error instanceof Error) {
      msaSegment.field(MSASegment.TextMessage).setValue(error.message);
    } else msaSegment.field(MSASegment.TextMessage).setValue(String(error));

    const errSegment = this.addSegment('ERR');
    if (error instanceof HL7Error) {
      errSegment
        .field(ERRSegment.HL7ErrorCode)
        .setValue(error.hl7ErrorCode || 207);
      errSegment.field(ERRSegment.Severity).setValue(error.severity);
      errSegment
        .field(ERRSegment.ApplicationErrorCode)
        .setValue(error.appErrorCode);
      const errLocation = errSegment.field(ERRSegment.ErrorLocation);
      errLocation.comp(ERLType.SegmentID).setValue(error.segmentType);
      errLocation.comp(ERLType.SegmentSequence).setValue(error.segmentSequence);
      errLocation.comp(ERLType.FieldPosition).setValue(error.fieldPosition);
      errLocation
        .comp(ERLType.ComponentNumber)
        .setValue(error.componentPosition);
      errLocation.comp(ERLType.FieldRepetition).setValue(error.repetitionIndex);
      errLocation
        .comp(ERLType.SubComponentNumber)
        .setValue(error.subComponentPosition);
      if ((process?.env.NODE_ENV || '').startsWith('dev')) {
        errSegment
          .field(ERRSegment.DiagnosticInformation)
          .setValue(error.stack);
      }
    } else {
      errSegment.field(ERRSegment.HL7ErrorCode).setValue(207);
      errSegment.field(ERRSegment.Severity).setValue('E');
      if (error instanceof Error) {
        if ((error as any).code)
          errSegment
            .field(ERRSegment.ApplicationErrorCode)
            .setValue((error as any).code);
      }
    }
  }

  protected _clear(version?: HL7Version) {
    if (!version) version = this._version || HL7Version.v2_7_1;
    this._version = version;
    const nearestVersion = findNearestHL7Version(version);
    this._dictionary = this._dictionaries[nearestVersion];
    this._segments = [];
    this.fieldSeparator = FIELD_SEPARATOR;
    this.componentSeparator = COMPONENT_SEPARATOR;
    this.subComponentSeparator = SUBCOMPONENT_SEPARATOR;
    this.repetitionSeparator = REPETITION_SEPARATOR;
    this.escapeCharacter = ESCAPE_CHARACTER;
  }

  /**
   *
   * @static
   */
  static parse(
    input: string | Buffer,
    options?: HL7MessageParseOptions,
  ): HL7Message {
    const message = new HL7Message(undefined, options?.dictionaries);
    message.parse(input, options);
    return message;
  }

  /**
   *
   * @static
   */
  static parseRaw(input: string | Buffer): {
    header: string;
    fieldSeparator: string;
    componentSeparator: string;
    repetitionSeparator: string;
    escapeCharacter: string;
    subComponentSeparator: string;
    encoding: string;
    version: HL7Version;
    messageType: string;
    data: string;
  } {
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
    const charset = headerItems[17]?.split('^')[0];
    let encoding = HL7Message.encodingMapping[charset] || charset || 'utf-8';
    try {
      iconv.getDecoder(charset);
    } catch {
      encoding = 'utf-8';
    }

    let str = Buffer.isBuffer(input) ? iconv.decode(input, encoding) : input;
    if (str.startsWith(VT)) str = str.substring(1);
    const k = str.indexOf(FS);
    if (k >= 0) str = str.substring(0, k);

    return {
      fieldSeparator,
      componentSeparator: headerItems[1][0],
      repetitionSeparator: headerItems[1][1],
      escapeCharacter: headerItems[1][2],
      subComponentSeparator: headerItems[1][3],
      messageType: headerItems[8],
      header: headerStr,
      data: str,
      encoding,
      version: version as HL7Version,
    };
  }

  static readonly encodingMapping = {
    ASCII: 'ascii',
    '8859/1': 'latin1',
    '8859/2': 'latin2',
    '8859/3': 'ISO-8859-3',
    '8859/4': 'ISO-8859-4',
    '8859/5': 'ISO-8859-5',
    '8859/6': 'ISO-8859-6',
    '8859/7': 'ISO-8859-7',
    '8859/8': 'ISO-8859-8',
    '8859/9': 'latin5',
    '8859/15': 'latin9',
    'ISO IR6': 'ascii',
    'ISO IR14': 'ISO-2022-JP',
    'ISO IR87': 'ISO-2022-JP',
    'ISO IR159': 'ISO-2022-JP-2',
    'GB 18030-2000': 'gb18030',
    'KS X 1001': 'EUC-KR',
    'CNS 11643-1992': 'EUC-TW',
    'BIG-5': 'Big5',
    UNICODE: 'utf16-le',
    'UNICODE UTF-8': 'utf8',
    'UNICODE UTF-16': 'utf16-le',
    // ⚠️ UTF-32 iconv-lite tarafından desteklenmez
  };
}

export interface HL7MessageParseOptions extends Hl7SegmentParseOptions {
  dictionaries?: Record<string, HL7Dictionary>;
}

export interface HL7MessageSerializeOptions
  extends Hl7SegmentSerializeOptions {}

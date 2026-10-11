import process from 'node:process';
import type { AcknowledgmentCode, HL7Dictionary } from 'hl7v2-dictionary';
import {
  dictionaries as defaultDictionaries,
  ERLType,
  ERRSegment,
  findNearestHL7Version,
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
import { HL7MessageNode } from './hl7-message-node.js';
import type {
  Hl7SegmentParseOptions,
  Hl7SegmentSerializeOptions,
} from './hl7-segment.js';
import { HL7Segment } from './hl7-segment.js';
import {
  charsetFromMSH18,
  DEFAULT_HL7_CHARSET,
  detectByteOrderMark,
  encodeHL7String,
  HL7_CHARSET_ENCODINGS,
  resolveHL7Encoding,
} from './utils/hl7-charset.js';

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
  /** The fifth encoding character of v2.7 and later (MSH-2), when the message declares one */
  truncationCharacter?: string;

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
    return f.getValue(1) + '^' + (f.getValue(2) || '');
  }

  /**
   * The character set the message is encoded with: the first non-empty
   * repetition of MSH-18
   */
  get charset(): string | undefined {
    const field = this.header?.field(MSHSegment.CharacterSet);
    if (!field) return;
    for (const rep of field.repetitions) {
      const value = rep.getValue(1);
      if (value) return String(value);
    }
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
    msh.field(MSHSegment.CharacterSet).setValue(DEFAULT_HL7_CHARSET);
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
  getSegment(
    segmentType: string,
    indexOrAfter?: number | HL7Segment,
  ): HL7Segment | undefined {
    let k = 0;
    for (let i = 0; i < this.segments.length; i++) {
      const seg = this.segments[i];
      if (seg instanceof HL7Segment && seg.segmentType === segmentType) {
        if (!indexOrAfter) return seg;
        if (typeof indexOrAfter === 'number') {
          if (indexOrAfter === k++) return seg;
        } else {
          if (indexOrAfter === seg) indexOrAfter = undefined;
        }
      }
    }
  }

  /**
   * Searches for a segment of a given type in reverse order
   */
  getSegmentFromLast(
    segmentType: string,
    indexOrAfter?: number | HL7Segment,
  ): HL7Segment | undefined {
    let k = 0;
    for (let i = this.segments.length - 1; i >= 0; i--) {
      const seg = this.segments[i];
      if (seg instanceof HL7Segment && seg.segmentType === segmentType) {
        if (!indexOrAfter) return seg;
        if (typeof indexOrAfter === 'number') {
          if (indexOrAfter === k++) return seg;
        } else {
          if (indexOrAfter === seg) indexOrAfter = undefined;
        }
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

  /**
   * Serializes the message and encodes it with the character set in MSH-18.
   * Characters the character set cannot represent are transliterated to ASCII.
   */
  toBuffer(options?: HL7MessageSerializeOptions): Buffer {
    return encodeHL7String(
      this.toHL7String(options),
      this.charset,
      this.fieldSeparator +
        this.componentSeparator +
        this.repetitionSeparator +
        this.escapeCharacter +
        this.subComponentSeparator,
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
    this.truncationCharacter = raw.truncationCharacter;

    /**
     * CR is the standard segment terminator, and with it an LF is data.
     * A message with no CR at all is taken to be split by LF
     */
    const lines = raw.data.includes(CR)
      ? raw.data.replaceAll(CR + LF, CR).split(CR)
      : raw.data.split(LF);
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

  buildStructureTree(): HL7MessageNode {
    /**
     * The structure MSH-9.3 names when the dictionary has it (ADT^A04^ADT_A01
     * is an ADT_A01), as HAPI reads it; otherwise type and trigger event
     */
    const messages = this.dictionary.messages || {};
    const declared = this.header.field(MSHSegment.MessageType).getValue(3) as
      string | undefined;
    const messageType =
      declared && messages[declared]
        ? declared
        : this.messageType.replace('^', '_');
    const messageDefinition = messages[messageType];

    if (!messageDefinition?.segments) {
      const result = new HL7MessageNode('MESSAGE');
      result.items.push(...this.segments);
      return result;
    }

    // Helper function to process a segment definition recursively
    const byIdx = (defs: Record<string, any>) =>
      Object.entries<any>(defs).sort(
        ([, a], [, b]) => (a.idx || 0) - (b.idx || 0),
      );

    /** Matches one item of a structure - a segment, a group or a choice */
    const matchItem = (
      key: string,
      def: any,
      node: HL7MessageNode,
      currentSegmentIndex: { value: number },
    ) => {
      const maxOccurrences = def.max || Number.MAX_SAFE_INTEGER;
      if (def.choice) {
        /** One of the alternatives, each time the choice occurs */
        for (let n = 0; n < maxOccurrences; n++) {
          const before = currentSegmentIndex.value;
          for (const [altKey, alt] of byIdx(def.segments)) {
            matchItem(altKey, alt, node, currentSegmentIndex);
            if (currentSegmentIndex.value > before) break;
          }
          if (currentSegmentIndex.value === before) break;
        }
        return;
      }
      if (def.segments) {
        /** A group, repeated while it matches */
        let occurrenceCount = 0;
        while (
          occurrenceCount < maxOccurrences &&
          currentSegmentIndex.value < this.segments.length
        ) {
          const groupStartIndex = currentSegmentIndex.value;
          const groupNode = processSegmentDefinition(
            def.segments,
            key,
            currentSegmentIndex,
            def.aliases,
          );
          if (
            currentSegmentIndex.value > groupStartIndex &&
            groupNode.items.length > 0
          ) {
            node.items.push(groupNode);
            occurrenceCount++;
          } else break;
        }
        return;
      }
      /** A segment; a repeated one is keyed PID2, PID3 ... and names its type */
      const segmentType = def.segment || key;
      /** The standard's placeholders: any segment, any Z segment */
      const matches = (type: string) =>
        segmentType === 'anyHL7Segment'
          ? true
          : segmentType === 'anyZSegment'
            ? type.startsWith('Z')
            : type === segmentType;
      let matchedCount = 0;
      while (
        matchedCount < maxOccurrences &&
        currentSegmentIndex.value < this.segments.length &&
        matches(this.segments[currentSegmentIndex.value].segmentType)
      ) {
        node.items.push(this.segments[currentSegmentIndex.value]);
        currentSegmentIndex.value++;
        matchedCount++;
      }
    };

    const processSegmentDefinition = (
      segmentDef: Record<string, any>,
      nodeName: string,
      currentSegmentIndex: { value: number },
      aliases?: string[],
    ): HL7MessageNode => {
      const node = new HL7MessageNode(nodeName, aliases);

      const sortedEntries = byIdx(segmentDef);

      for (const [key, def] of sortedEntries) {
        matchItem(key, def, node, currentSegmentIndex);
      }

      return node;
    };

    const segmentIndexRef = { value: 0 };
    const result = processSegmentDefinition(
      messageDefinition.segments!,
      messageType,
      segmentIndexRef,
    );

    // Add any remaining unmatched segments to the result
    while (segmentIndexRef.value < this.segments.length) {
      const segment = this.segments[segmentIndexRef.value];
      result.items.push(segment);
      segmentIndexRef.value++;
    }

    return result;
  }

  /**
   * Creates the ACK message addressed back to this message's sender, with the
   * header filled as HAPI's `fillResponseHeader` fills it: sending and
   * receiving application/facility swapped; delimiters, processing ID,
   * version and character set kept, so the answer goes out in the encoding
   * the request came in.
   */
  protected _createResponse(): HL7Message {
    const out = new HL7Message(this.version, this._dictionaries);
    /** Answered in the delimiters it was sent in (MSH-1, MSH-2) */
    out.fieldSeparator = this.fieldSeparator;
    out.componentSeparator = this.componentSeparator;
    out.repetitionSeparator = this.repetitionSeparator;
    out.escapeCharacter = this.escapeCharacter;
    out.subComponentSeparator = this.subComponentSeparator;
    out.truncationCharacter = this.truncationCharacter;
    const msh = out.header;
    const copy = (to: number, from: number) =>
      msh.field(to).fromHL7String(this.header.field(from).toHL7String());
    copy(MSHSegment.SendingApplication, MSHSegment.ReceivingApplication);
    copy(MSHSegment.SendingFacility, MSHSegment.ReceivingFacility);
    copy(MSHSegment.ReceivingApplication, MSHSegment.SendingApplication);
    copy(MSHSegment.ReceivingFacility, MSHSegment.SendingFacility);
    copy(MSHSegment.ProcessingID, MSHSegment.ProcessingID);
    if (this.charset) copy(MSHSegment.CharacterSet, MSHSegment.CharacterSet);
    msh.field(MSHSegment.MessageType).setValue('ACK');
    msh
      .field(MSHSegment.MessageType)
      .comp(2)
      .setValue(this.header.field(MSHSegment.MessageType).getValue(2));
    msh
      .field(MSHSegment.MessageControlID)
      .setValue(String(Date.now() + uid(5)));
    return out;
  }

  createAck(
    ackCode: AcknowledgmentCode = 'AA',
    textMessage?: string,
  ): HL7Message {
    const out = this._createResponse();

    const msa = out.addSegment('MSA');
    msa.field(MSASegment.AcknowledgmentCode).setValue(ackCode);
    msa
      .field(MSASegment.MessageControlID)
      .setValue(this.header.field(MSHSegment.MessageControlID).getValue());
    if (textMessage) msa.field(MSASegment.TextMessage).setValue(textMessage);
    return out;
  }

  createNak(errors: (Error | string)[]): HL7Message {
    const out = this._createResponse();

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
    this.truncationCharacter = undefined;
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
    truncationCharacter?: string;
    encoding: string;
    version: HL7Version;
    messageType: string;
    data: string;
  } {
    let headerStr: string;
    /** A byte order mark decides the encoding before MSH-18 can be read */
    let bomEncoding: string | undefined;
    if (Buffer.isBuffer(input)) {
      const bom = detectByteOrderMark(input);
      if (bom) {
        bomEncoding = bom.encoding;
        input =
          bom.encoding === 'utf8'
            ? bom.data
            : iconv.decode(bom.data, bom.encoding);
      }
    }
    if (Buffer.isBuffer(input)) {
      headerStr = input.toString('utf8', 0, headerEnd(input));
    } else if (typeof input === 'string') {
      headerStr = input.substring(0, headerEnd(input));
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
    const encodingChars = headerItems[1] || '';
    const charset = charsetFromMSH18(
      headerItems[17],
      encodingChars[1],
      encodingChars[0],
    );
    const encoding = bomEncoding || resolveHL7Encoding(charset);

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
      truncationCharacter: headerItems[1][4] || undefined,
      messageType: headerItems[8],
      header: headerStr,
      data: str,
      encoding,
      version: version as HL7Version,
    };
  }

  /**
   * @deprecated Use HL7_CHARSET_ENCODINGS
   */
  static readonly encodingMapping: Record<string, string> =
    HL7_CHARSET_ENCODINGS;
}

export interface HL7MessageParseOptions extends Hl7SegmentParseOptions {
  dictionaries?: Record<string, HL7Dictionary>;
}

export interface HL7MessageSerializeOptions extends Hl7SegmentSerializeOptions {}

/**
 * Where the MSH segment ends: at the first CR, or at the first LF in a message
 * with no CR - looking only inside the frame, since the MLLP end block (FS CR)
 * carries a CR of its own
 */
function headerEnd(input: string | Buffer): number {
  let limit = input.indexOf(FS);
  if (limit < 0) limit = input.length;
  const cr = input.indexOf(CR);
  if (cr >= 0 && cr < limit) return cr;
  const lf = input.indexOf(LF);
  if (lf >= 0 && lf < limit) return lf;
  return limit;
}

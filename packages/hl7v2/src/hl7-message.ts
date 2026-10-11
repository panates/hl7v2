import process from 'node:process';
import type {
  AcknowledgmentCode,
  HL7Dictionary,
  HL7SegmentField,
  HL7SegmentObjects,
  HL7TypedVersion,
  HL7VersionFieldComponents,
  HL7VersionSegmentObjects,
  HL7VersionSegments,
} from 'hl7v2-dictionary';
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
import { HL7_ERROR_CODES, HL7Error } from './hl7-error.js';
import { HL7MessageNode } from './hl7-message-node.js';
import { getPathValue, type HL7CheckedPath, setPathValue } from './hl7-path.js';
import type {
  Hl7SegmentParseOptions,
  Hl7SegmentSerializeOptions,
} from './hl7-segment.js';
import { HL7Segment } from './hl7-segment.js';
import { type HL7ValidateOptions, validateMessage } from './hl7-validator.js';
import {
  charsetFromMSH18,
  DEFAULT_HL7_CHARSET,
  detectByteOrderMark,
  encodeHL7String,
  HL7_CHARSET_ENCODINGS,
  resolveHL7Encoding,
} from './utils/hl7-charset.js';
import { toDate } from './utils/to-date.js';

/**
 * A segment as an object for a message of version V: the version's own
 * interface when V is a version with typed objects ('2.5'), otherwise the
 * one uniting every version
 */
export type HL7MessageSegmentObject<
  V extends HL7Version,
  K extends keyof HL7SegmentObjects,
> = V extends HL7TypedVersion
  ? K extends keyof HL7VersionSegments[V]
    ? HL7VersionSegments[V][K]
    : never
  : HL7SegmentObjects[K];

/**
 * A segment of a message of version V: field() takes only the fields the
 * version defines for S when V is a version with typed objects, otherwise
 * any number
 */
export type HL7MessageSegment<
  V extends HL7Version,
  S extends string,
> = HL7Segment<
  HL7SegmentField<V, S> & number,
  HL7VersionSegmentObjects[V][S],
  HL7VersionFieldComponents[V][S]
>;

/**
 * An HL7 v2 message. V is its version when known to the compiler -
 * new HL7Message('2.5'), HL7Message.parse(text, { version: '2.5' }) - which
 * types getSegmentObject() by that version's definitions.
 */
export class HL7Message<V extends HL7Version = HL7Version> {
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
    version: V = HL7Version.v2_7_1 as V,
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

  get header(): HL7MessageSegment<V, 'MSH'> {
    return this.getSegment('MSH')!;
  }

  /** MSH for the class's own use, its fields by any number */
  protected get _header(): HL7Segment {
    return this.getSegment('MSH') as HL7Segment;
  }

  get version(): HL7Version {
    return this._version;
  }

  get messageType(): string {
    const f = this._header.field(MSHSegment.MessageType);
    if (!f) return '';
    return f.getValue(1) + '^' + (f.getValue(2) || '');
  }

  /**
   * The character set the message is encoded with: the first non-empty
   * repetition of MSH-18
   */
  get charset(): string | undefined {
    const field = this._header?.field(MSHSegment.CharacterSet);
    if (!field) return;
    for (const rep of field.repetitions) {
      const value = rep.getValue(1);
      if (value) return String(value);
    }
  }

  get controlId(): string {
    return this._header.field(MSHSegment.MessageControlID).toHL7String();
  }

  clear(version?: HL7Version) {
    this._clear(version);
    const msh: HL7Segment = this.addSegment('MSH');
    msh.field(MSHSegment.DateTimeOfMessage).setValue(new Date());
    msh.field(MSHSegment.MessageControlID).setValue(uid(8));
    /** Required; production, as HAPI's initQuickstart fills it */
    msh.field(MSHSegment.ProcessingID).setValue('P');
    msh.field(MSHSegment.VersionID).setValue(version);
    msh.field(MSHSegment.CharacterSet).setValue(DEFAULT_HL7_CHARSET);
  }

  addSegment<S extends string>(
    segmentType: S,
    index?: number,
  ): HL7MessageSegment<V, S> {
    const segment = new HL7Segment(this, segmentType) as HL7MessageSegment<
      V,
      S
    >;
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
  getSegment<S extends string>(
    segmentType: S,
    indexOrAfter?: number | HL7Segment,
  ): HL7MessageSegment<V, S> | undefined {
    let k = 0;
    for (let i = 0; i < this.segments.length; i++) {
      const seg = this.segments[i];
      if (seg instanceof HL7Segment && seg.segmentType === segmentType) {
        if (!indexOrAfter) return seg as HL7MessageSegment<V, S>;
        if (typeof indexOrAfter === 'number') {
          if (indexOrAfter === k++) return seg as HL7MessageSegment<V, S>;
        } else {
          if (indexOrAfter === seg) indexOrAfter = undefined;
        }
      }
    }
  }

  /**
   * Searches for a segment of a given type in reverse order
   */
  getSegmentFromLast<S extends string>(
    segmentType: S,
    indexOrAfter?: number | HL7Segment,
  ): HL7MessageSegment<V, S> | undefined {
    let k = 0;
    for (let i = this.segments.length - 1; i >= 0; i--) {
      const seg = this.segments[i];
      if (seg instanceof HL7Segment && seg.segmentType === segmentType) {
        if (!indexOrAfter) return seg as HL7MessageSegment<V, S>;
        if (typeof indexOrAfter === 'number') {
          if (indexOrAfter === k++) return seg as HL7MessageSegment<V, S>;
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
   * A character set this library does not know is encoded with
   * `options.defaultCharset` (UTF-8 unless given).
   */
  toBuffer(options?: HL7MessageEncodeOptions): Buffer {
    return encodeHL7String(
      this.toHL7String(options),
      this.charset,
      this.fieldSeparator +
        this.componentSeparator +
        this.repetitionSeparator +
        this.escapeCharacter +
        this.subComponentSeparator,
      options?.defaultCharset,
    );
  }

  parse(input: string | Buffer, options?: HL7MessageParseOptions) {
    const raw = HL7Message.parseRaw(input, options?.defaultCharset);
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
        if (!this._header) {
          this.addSegment('MSH');
        }
        this._header
          .field(MSHSegment.SendingApplication)
          .setValue(headerItems[2]);
        this._header.field(MSHSegment.SendingFacility).setValue(headerItems[3]);
        this._header
          .field(MSHSegment.ReceivingApplication)
          .setValue(headerItems[4]);
        this._header
          .field(MSHSegment.ReceivingFacility)
          .setValue(headerItems[5]);
        this._header
          .field(MSHSegment.EncodingCharacters)
          .setValue(raw.encoding);
        this._header
          .field(MSHSegment.MessageControlID)
          .setValue(headerItems[9]);
        this._header.field(MSHSegment.VersionID).setValue(raw.version);
        /* c8 ignore next */
        const e1 = e instanceof HL7Error ? e : new HL7Error(e.message);
        e1.stack = e.stack;
        if (e1.segmentType) {
          const lastSeg = this.getSegmentFromLast(e.segmentType);
          if (lastSeg) e1.segmentSequence = lastSeg.sequence;
        }
        e1.line = i + 1;
        throw e1;
      }
    }
  }

  /**
   * The name of the message structure this message follows: the one MSH-9.3
   * names when the dictionary has it (ADT^A04^ADT_A01 is an ADT_A01), as HAPI
   * reads it; otherwise type and trigger event (ADT_A04), which the
   * dictionary maps to its structure. Undefined when the dictionary has none.
   */
  get structureName(): string | undefined {
    const messages = this.dictionary.messages || {};
    const declared = this._header.field(MSHSegment.MessageType).getValue(3) as
      string | undefined;
    if (declared && messages[declared]) return declared;
    const name = this.messageType.replace('^', '_');
    return messages[name] ? name : undefined;
  }

  /**
   * The value at a path written as HAPI's Terser writes it - "PID-5-1",
   * "OBX(2)-5", "/PATIENT_RESULT/ORDER_OBSERVATION(1)/OBX(0)-5" (see HL7Path)
   */
  get<P extends string>(path: HL7CheckedPath<V, P>): any {
    return getPathValue(this, path);
  }

  /** The value at a path as a Date (see get() and Hl7Component.getDate()) */
  getDate<P extends string>(path: HL7CheckedPath<V, P>): Date | undefined {
    return toDate(getPathValue(this, path));
  }

  /**
   * A segment as a typed plain object (see HL7Segment.toObject()):
   * getSegmentObject('PID')?.PatientName. Undefined when there is none.
   */
  getSegmentObject<K extends keyof HL7SegmentObjects>(
    segmentType: K,
    index?: number,
  ): HL7MessageSegmentObject<V, K> | undefined {
    return this.getSegment(segmentType, index)?.toObject<
      HL7MessageSegmentObject<V, K> & object
    >();
  }

  /**
   * Whether the message is read with the given version's definitions - the
   * dictionary of its MSH-12, or of the nearest version below it
   */
  hasVersion(version: HL7Version): boolean {
    return (
      findNearestHL7Version(this.version) === findNearestHL7Version(version)
    );
  }

  /**
   * The message typed as of the given version, so getSegmentObject() is
   * typed by that version's definitions: msg.asVersion('2.5'). Throws an
   * HL7Error (203) when the message is not of it (see hasVersion()).
   */
  asVersion<W extends HL7Version>(version: W): HL7Message<W> {
    if (!this.hasVersion(version)) {
      throw new HL7Error(`Message of version ${this.version}, not ${version}`, {
        hl7ErrorCode: 203,
      });
    }
    return this as unknown as HL7Message<W>;
  }

  /** Sets the value at a path (see get() and HL7Path) */
  set<P extends string>(path: HL7CheckedPath<V, P>, value: any): this {
    setPathValue(this, path, value);
    return this;
  }

  /**
   * Checks the message against its version's dictionary - see HL7Validator.
   * Returns the problems found; an empty list when there are none.
   */
  validate(options?: HL7ValidateOptions): HL7Error[] {
    return validateMessage(this, options);
  }

  buildStructureTree(): HL7MessageNode {
    const messageType =
      this.structureName ?? this.messageType.replace('^', '_');
    const messageDefinition = this.dictionary.messages?.[messageType];

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
      msh.field(to).fromHL7String(this._header.field(from).toHL7String());
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
      .setValue(this._header.field(MSHSegment.MessageType).getValue(2));
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
      .setValue(this._header.field(MSHSegment.MessageControlID).getValue());
    if (textMessage) msa.field(MSASegment.TextMessage).setValue(textMessage);
    return out;
  }

  /**
   * Creates the negative acknowledgment of this message: AR (reject) when an
   * error says the message cannot be taken at all - an unsupported message
   * type, event, processing ID or version (HL7 errors 200-203) - otherwise
   * AE (error). An HL7Error's `ackCode` decides it explicitly.
   */
  createNak(
    errors: (Error | string)[],
    /** 'accept' for an enhanced-mode accept acknowledgment: CE / CR */
    kind: 'application' | 'accept' = 'application',
  ): HL7Message {
    const out = this._createResponse();

    const rejected = errors.some(
      e =>
        e instanceof HL7Error &&
        (e.ackCode === 'AR' ||
          (!e.ackCode &&
            e.hl7ErrorCode !== undefined &&
            e.hl7ErrorCode >= 200 &&
            e.hl7ErrorCode <= 203)),
    );
    const msaSegment = out.addSegment('MSA');
    msaSegment
      .field(MSASegment.AcknowledgmentCode)
      .setValue(
        kind === 'accept' ? (rejected ? 'CR' : 'CE') : rejected ? 'AR' : 'AE',
      );
    msaSegment
      .field(MSASegment.MessageControlID)
      .setValue(this._header.field(MSHSegment.MessageControlID).getValue());
    for (const error of errors) {
      out.addError(error);
    }
    return out;
  }

  /**
   * Adds an ERR segment for the error, laid out as the message's version
   * defines ERR: from 2.5 the location, code and severity have fields of
   * their own (ERR-2, -3, -4); before it ERR-1 holds them all - segment,
   * sequence, field and the coded error (2.3, 2.4), or the error code alone
   * (2.1, 2.2). The first error's text goes to MSA-3.
   */
  addError(error: Error | string) {
    /* The layout is read from the dictionary, so fields go by any number */
    let msaSegment: HL7Segment | undefined = this.getSegment('MSA');
    if (!msaSegment) msaSegment = this.addSegment('MSA');
    const text = error instanceof Error ? error.message : String(error);
    /* MSA-3 holds one text: the first error's; each has its ERR */
    const msaText = msaSegment.field(MSASegment.TextMessage);
    if (msaText.isEmpty()) msaText.setValue(text);

    const e = error instanceof HL7Error ? error : undefined;
    const code =
      e?.hl7ErrorCode ||
      (error instanceof Error && (error as any).hl7ErrorCode) ||
      207;
    const errSegment: HL7Segment = this.addSegment('ERR');
    const fields = this.dictionary.segments.ERR?.fields || {};

    if (fields['3']) {
      errSegment.field(ERRSegment.HL7ErrorCode).setValue(code);
      errSegment.field(ERRSegment.Severity).setValue(e?.severity || 'E');
      const appCode = e?.appErrorCode ?? (error as any)?.code;
      if (appCode != null) {
        errSegment.field(ERRSegment.ApplicationErrorCode).setValue(appCode);
      }
      if (e) {
        const errLocation = errSegment.field(ERRSegment.ErrorLocation);
        errLocation.comp(ERLType.SegmentID).setValue(e.segmentType);
        errLocation.comp(ERLType.SegmentSequence).setValue(e.segmentSequence);
        errLocation.comp(ERLType.FieldPosition).setValue(e.fieldPosition);
        errLocation.comp(ERLType.ComponentNumber).setValue(e.componentPosition);
        /* ERL-4 counts repetitions from 1 */
        errLocation
          .comp(ERLType.FieldRepetition)
          .setValue(
            e.repetitionIndex != null ? e.repetitionIndex + 1 : undefined,
          );
        errLocation
          .comp(ERLType.SubComponentNumber)
          .setValue(e.subComponentPosition);
        if ((process?.env.NODE_ENV || '').startsWith('dev')) {
          errSegment.field(ERRSegment.DiagnosticInformation).setValue(e.stack);
        }
      }
      return;
    }

    /* Before 2.5: everything in ERR-1 */
    const err1 = errSegment.field(1);
    if (err1.isPrimitive) {
      err1.setValue(code);
      return;
    }
    if (e?.segmentType) err1.comp(1).setValue(e.segmentType);
    if (e?.segmentSequence != null) err1.comp(2).setValue(e.segmentSequence);
    if (e?.fieldPosition != null) err1.comp(3).setValue(e.fieldPosition);
    const codeComponent = err1.comp(4);
    codeComponent.setValue(code, 1);
    codeComponent.setValue(HL7_ERROR_CODES[code] ?? text, 2);
    codeComponent.setValue('HL70357', 3);
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
  /**
   * Parses a message. Given `version`, the message must be of it (see
   * hasVersion()) - an HL7Error (203) otherwise - and is typed by it.
   */
  static parse<W extends HL7Version = HL7Version>(
    input: string | Buffer,
    options?: HL7MessageParseOptions & { version?: W },
  ): HL7Message<W> {
    const message = new HL7Message<W>(undefined, options?.dictionaries);
    message.parse(input, options);
    if (options?.version) message.asVersion(options.version);
    return message;
  }

  /**
   *
   * @static
   */
  /**
   * Reads a message's header and decodes it with the character set MSH-18
   * names; one this library does not know is decoded with `defaultCharset`
   * (UTF-8 unless given), as HAPI decodes it with its configured default.
   */
  static parseRaw(
    input: string | Buffer,
    defaultCharset?: string,
  ): {
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
    const encoding = bomEncoding || resolveHL7Encoding(charset, defaultCharset);

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
  /**
   * The character set a Buffer is decoded with when MSH-18 is empty or names
   * one this library does not know: an HL7 table 0211 value or an iconv-lite
   * encoding name. Default: UTF-8, which reads ASCII as well.
   */
  defaultCharset?: string;
}

export interface HL7MessageSerializeOptions extends Hl7SegmentSerializeOptions {}

export interface HL7MessageEncodeOptions extends HL7MessageSerializeOptions {
  /** The character set used when MSH-18 names one this library does not know */
  defaultCharset?: string;
}

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

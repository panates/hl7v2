import { clone, merge } from '@jsopen/objects';
import type { DeeperPartial } from 'ts-gems';
import type {
  HL7DataTypeDefinition,
  HL7MessageDefinition,
  HL7SegmentDefinition,
  HL7TableDefinition,
} from './types.js';
import { HL7Version } from './version.enum.js';

export class HL7Dictionary {
  version: HL7Version;
  segments: Record<string, HL7SegmentDefinition>;
  types: Record<string, HL7DataTypeDefinition>;
  messages: Record<string, HL7MessageDefinition>;
  /** HL7 tables by number (1 is Administrative Sex) */
  tables: Record<number, HL7TableDefinition>;

  constructor(args: {
    version?: HL7Version;
    segments?: Record<string, HL7SegmentDefinition>;
    types?: Record<string, HL7DataTypeDefinition>;
    messages?: Record<string, HL7MessageDefinition>;
    tables?: Record<number, HL7TableDefinition>;
  }) {
    this.version = args.version || HL7Version.v2_1;
    this.segments = args.segments || {};
    this.types = args.types || {};
    this.messages = args.messages || {};
    this.tables = args.tables || {};
  }

  /** The text of a code in a table: table(1, 'F') is "Female" */
  tableValue(table: number, code: string): string | undefined {
    return this.tables[table]?.values[code];
  }

  /**
   * Merges table values over this dictionary's - a user-defined table's local
   * codes, or codes a site adds: overwriteTables({ 1: { values: { X: 'Non-binary' } } })
   */
  overwriteTables(
    tableDefs: Record<number, DeeperPartial<HL7TableDefinition>>,
  ): void {
    overwrite(this.tables as any, tableDefs);
  }

  /**
   * Creates a dictionary with this one's definitions, the given ones merged
   * over them. Only what is given is copied - every other definition is shared,
   * unchanged, with this dictionary.
   */
  extend(args: {
    version?: HL7Version;
    segments?: Record<string, DeeperPartial<HL7SegmentDefinition>>;
    types?: Record<string, DeeperPartial<HL7DataTypeDefinition>>;
    messages?: Record<string, HL7MessageDefinition>;
    tables?: Record<number, DeeperPartial<HL7TableDefinition>>;
  }): HL7Dictionary {
    const dict = new HL7Dictionary({
      version: args.version || this.version,
      segments: { ...this.segments },
      types: { ...this.types },
      messages: { ...this.messages, ...args.messages },
      tables: { ...this.tables },
    });
    if (args.tables) dict.overwriteTables(args.tables);
    if (args.segments) dict.overwriteSegments(args.segments);
    if (args.types) dict.overwriteTypes(args.types);
    return dict;
  }

  /** Merges the given definitions over this dictionary's segments */
  overwriteSegments(
    segmentsDefs: Record<string, DeeperPartial<HL7SegmentDefinition>>,
  ): void {
    overwrite(this.segments, segmentsDefs);
  }

  /** Merges the given definitions over this dictionary's data types */
  overwriteTypes(
    typeDefs: Record<string, DeeperPartial<HL7DataTypeDefinition>>,
  ): void {
    overwrite(this.types, typeDefs);
  }
}

/**
 * Copy-on-write: a definition may be shared, frozen, by several versions, so
 * the merge goes into a copy that then replaces it in this dictionary alone.
 */
function overwrite(target: Record<string, any>, defs: Record<string, any>) {
  for (const [name, def] of Object.entries(defs)) {
    const copy = target[name] ? clone(target[name], { deep: 'full' }) : {};
    target[name] = merge(copy, def, { deep: 'full' });
  }
}

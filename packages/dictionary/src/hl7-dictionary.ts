import { clone, merge } from '@jsopen/objects';
import type { DeeperPartial } from 'ts-gems';
import type {
  HL7DataTypeDefinition,
  HL7MessageDefinition,
  HL7SegmentDefinition,
} from './types.js';
import { HL7Version } from './version.enum.js';

export class HL7Dictionary {
  version: HL7Version;
  segments: Record<string, HL7SegmentDefinition>;
  types: Record<string, HL7DataTypeDefinition>;
  messages: Record<string, HL7MessageDefinition>;

  constructor(args: {
    version?: HL7Version;
    segments?: Record<string, HL7SegmentDefinition>;
    types?: Record<string, HL7DataTypeDefinition>;
    messages?: Record<string, HL7MessageDefinition>;
  }) {
    this.version = args.version || HL7Version.v2_1;
    this.segments = args.segments || {};
    this.types = args.types || {};
    this.messages = args.messages || {};
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
  }): HL7Dictionary {
    const dict = new HL7Dictionary({
      version: args.version || this.version,
      segments: { ...this.segments },
      types: { ...this.types },
      messages: { ...this.messages, ...args.messages },
    });
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

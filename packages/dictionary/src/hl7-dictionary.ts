import { clone, merge } from '@jsopen/objects';
import { DeeperPartial } from 'ts-gems';
import {
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

  extend(args: {
    version?: HL7Version;
    segments?: Record<string, DeeperPartial<HL7SegmentDefinition>>;
    types?: Record<string, DeeperPartial<HL7DataTypeDefinition>>;
    messages?: Record<string, HL7MessageDefinition>;
  }): HL7Dictionary {
    const dict = new HL7Dictionary({
      version: args.version || this.version,
      segments: clone(this.segments, { deep: 'full' }),
      types: clone(this.types, { deep: 'full' }),
      messages: args.messages || clone(this.messages, { deep: 'full' }),
    });
    if (args.segments) {
      dict.overwriteSegments(args.segments);
    }
    if (args.types) {
      dict.overwriteTypes(args.types);
    }
    return dict;
  }

  overwriteSegments(
    segmentsDefs: Record<string, DeeperPartial<HL7SegmentDefinition>>,
  ): void {
    merge(this.segments, segmentsDefs, { deep: 'full' });
  }

  overwriteTypes(
    typeDefs: Record<string, DeeperPartial<HL7DataTypeDefinition>>,
  ): void {
    merge(this.types, typeDefs, { deep: 'full' });
  }
}

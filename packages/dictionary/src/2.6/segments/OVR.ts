import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../types.js';

export const OVR: DeepPartial<HL7SegmentDefinition> = {
  desc: 'Override Segment',
  fields: {
    '1': {
      type: 'CWE',
      desc: 'Business Rule Override Type',
      opt: 'O',
      rep: 1,
      len: 705,
      table: 518,
    },
    '2': {
      type: 'CWE',
      desc: 'Business Rule Override Code',
      opt: 'O',
      rep: 1,
      len: 705,
      table: 521,
    },
    '3': {
      type: 'TX',
      desc: 'Override Comments',
      opt: 'O',
      rep: 1,
      len: 200,
    },
    '4': {
      type: 'XCN',
      desc: 'Override Entered By',
      opt: 'O',
      rep: 1,
      len: 250,
    },
    '5': {
      type: 'XCN',
      desc: 'Override Authorized By',
      opt: 'O',
      rep: 1,
      len: 250,
    },
  },
};

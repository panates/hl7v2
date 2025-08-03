import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../../interfaces/index.js';

export const NTE: DeepPartial<HL7SegmentDefinition> = {
  fields: {
    '1': {
      desc: 'Set ID - NTE',
    },
    '2': {
      desc: 'Source of Comment',
    },
    '3': {
      type: 'FT',
      opt: 'O',
      len: 65536,
    },
    '4': {
      type: 'CWE',
      desc: 'Comment Type',
      opt: 'O',
      rep: 1,
    },
    '5': {
      type: 'XCN',
      desc: 'Entered By',
      opt: 'O',
      rep: 1,
      len: 3220,
    },
    '6': {
      type: 'DTM',
      desc: 'Entered Date/Time',
      opt: 'O',
      rep: 1,
      len: 24,
    },
    '7': {
      type: 'DTM',
      desc: 'Effective Start Date',
      opt: 'O',
      rep: 1,
      len: 24,
    },
    '8': {
      type: 'DTM',
      desc: 'Expiration Date',
      opt: 'O',
      rep: 1,
      len: 24,
    },
  },
};

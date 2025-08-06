import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../types.js';

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
    },
    '6': {
      type: 'DTM',
      desc: 'Entered Date/Time',
      opt: 'O',
      rep: 1,
    },
    '7': {
      type: 'DTM',
      desc: 'Effective Start Date',
      opt: 'O',
      rep: 1,
    },
    '8': {
      type: 'DTM',
      desc: 'Expiration Date',
      opt: 'O',
      rep: 1,
    },
  },
};

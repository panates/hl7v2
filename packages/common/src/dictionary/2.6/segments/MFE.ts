import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../../interfaces/index.js';

export const MFE: DeepPartial<HL7SegmentDefinition> = {
  fields: {
    '1': {
      type: 'ID',
      opt: 'R',
      rep: 1,
      len: 3,
      table: 180,
    },
    '2': {
      type: 'ST',
      opt: 'O',
      rep: 1,
      len: 20,
    },
    '3': {
      type: 'DTM',
      opt: 'O',
      rep: 1,
      len: 26,
    },
    '4': {
      type: 'VARIES',
      desc: 'Primary Key Value - MFE',
      opt: 'R',
      rep: 'infinite',
      len: 200,
    },
    '5': {
      type: 'ID',
      desc: 'Primary Key Value Type',
      opt: 'R',
      rep: 'infinite',
      len: 3,
      table: 355,
    },
    '6': {
      type: 'DTM',
      desc: 'Entered Date/Time',
      opt: 'O',
      rep: 1,
      len: 24,
    },
    '7': {
      type: 'XCN',
      desc: 'Entered By',
      opt: 'O',
      rep: 1,
      len: 3220,
    },
  },
};

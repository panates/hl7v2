import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../types.js';

export const MFA: DeepPartial<HL7SegmentDefinition> = {
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
      len: 24,
    },
    '4': {
      type: 'CWE',
      desc: 'MFN Record Level Error Return',
      opt: 'R',
      rep: 1,
    },
    '5': {
      type: 'VARIES',
      opt: 'R',
      rep: 'infinite',
    },
    '6': {
      type: 'ID',
      desc: 'Primary Key Value Type - MFA',
      opt: 'R',
      rep: 'infinite',
      len: 3,
      table: 355,
    },
  },
};

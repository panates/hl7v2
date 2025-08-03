import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../../interfaces/index.js';

export const MFA: DeepPartial<HL7SegmentDefinition> = {
  desc: 'Master file acknowledgment segment',
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
      type: 'TS',
      opt: 'O',
      rep: 1,
      len: 26,
    },
    '4': {
      type: 'CE',
      desc: 'MFN Record Level Error Return',
      opt: 'R',
      rep: 1,
      len: 60,
    },
    '5': {
      type: 'CE',
      desc: 'Primary Key Value   MFA',
      opt: 'R',
      rep: 'infinite',
      len: 60,
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

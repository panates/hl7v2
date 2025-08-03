import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../../interfaces/index.js';

export const MFE: DeepPartial<HL7SegmentDefinition> = {
  desc: 'Master file entry',
  fields: {
    '1': {
      type: 'ID',
      desc: 'Record-level event code',
      opt: 'R',
      rep: 1,
      len: 3,
      table: 180,
    },
    '2': {
      type: 'ST',
      desc: 'MFN control ID',
      opt: 'O',
      rep: 1,
      len: 20,
    },
    '3': {
      type: 'TS',
      desc: 'Effective date / time',
      opt: 'O',
      rep: 1,
      len: 26,
    },
    '4': {
      type: 'CE',
      desc: 'Primary key value',
      opt: 'R',
      rep: 'infinite',
      len: 60,
    },
  },
};

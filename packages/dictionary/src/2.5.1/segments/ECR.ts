import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../types.js';

export const ECR: DeepPartial<HL7SegmentDefinition> = {
  desc: 'Equipment Command Response',
  fields: {
    '1': {
      type: 'CE',
      desc: 'Command Response',
      opt: 'R',
      rep: 1,
      len: 250,
      table: 387,
    },
    '2': {
      type: 'TS',
      desc: 'Date/Time Completed',
      opt: 'R',
      rep: 1,
      len: 26,
    },
    '3': {
      desc: 'Command Response Parameters',
      opt: 'O',
      rep: 'infinite',
      len: 65536,
    },
  },
};

import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../../interfaces/index.js';

export const ECR: DeepPartial<HL7SegmentDefinition> = {
  desc: 'Equipment Command Response',
  fields: {
    '1': {
      desc: 'Command Response',
      opt: 'R',
      rep: 1,
      table: 387,
    },
    '2': {
      desc: 'Date/Time Completed',
      opt: 'R',
      rep: 1,
    },
    '3': {
      desc: 'Command Response Parameters',
      opt: 'O',
      rep: 'infinite',
    },
  },
};

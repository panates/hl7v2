import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../../interfaces/index.js';

export const AIP: DeepPartial<HL7SegmentDefinition> = {
  fields: {
    '2': {
      len: 3,
    },
    '3': {
      rep: 'infinite',
    },
    '4': {
      desc: 'Resource Type',
      opt: 'O',
      table: 182,
    },
    '5': {
      rep: 1,
    },
  },
};

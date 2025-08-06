import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../types.js';

export const PDC: DeepPartial<HL7SegmentDefinition> = {
  fields: {
    '1': {
      rep: 'infinite',
    },
    '11': {
      desc: 'Marketing Approval ID',
    },
    '14': {
      desc: 'Date First Marketed',
    },
    '15': {
      desc: 'Date Last Marketed',
    },
  },
};

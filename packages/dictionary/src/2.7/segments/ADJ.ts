import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../types.js';

export const ADJ: DeepPartial<HL7SegmentDefinition> = {
  fields: {
    '4': {
      type: 'CWE',
    },
    '5': {
      rep: 5,
    },
    '11': {
      type: 'CWE',
    },
    '15': {
      desc: 'Responsible Organization ',
    },
  },
};

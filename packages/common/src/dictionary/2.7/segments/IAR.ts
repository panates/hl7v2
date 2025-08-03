import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../../interfaces/index.js';

export const IAR: DeepPartial<HL7SegmentDefinition> = {
  desc: 'allergy reaction',
  fields: {
    '1': {
      type: 'CWE',
      desc: 'Allergy Reaction Code',
      opt: 'R',
      rep: 1,
    },
    '2': {
      type: 'CWE',
      desc: 'Allergy Severity Code',
      opt: 'R',
      rep: 1,
      table: 128,
    },
    '3': {
      type: 'CWE',
      desc: 'Sensitivity to Causative Agent Code',
      opt: 'O',
      rep: 1,
      table: 436,
    },
    '4': {
      type: 'ST',
      desc: 'Management',
      opt: 'O',
      rep: 1,
    },
  },
};

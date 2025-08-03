import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../../interfaces/index.js';

export const PYE: DeepPartial<HL7SegmentDefinition> = {
  fields: {
    '1': {
      desc: 'Set ID - PYE',
    },
    '2': {
      type: 'CWE',
    },
    '3': {
      type: 'CWE',
      opt: 'C',
    },
    '4': {
      opt: 'C',
      rep: 5,
    },
    '5': {
      opt: 'C',
      rep: 4,
    },
    '6': {
      opt: 'C',
      rep: 4,
    },
    '7': {
      type: 'CWE',
    },
  },
};

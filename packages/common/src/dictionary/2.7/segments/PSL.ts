import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../../interfaces/index.js';

export const PSL: DeepPartial<HL7SegmentDefinition> = {
  fields: {
    '8': {
      rep: 5,
    },
    '10': {
      opt: 'C',
    },
    '12': {
      opt: 'C',
    },
    '13': {
      opt: 'C',
    },
    '14': {
      opt: 'C',
    },
    '15': {
      opt: 'C',
    },
    '16': {
      opt: 'C',
    },
    '17': {
      type: 'CWE',
      rep: 20,
    },
    '18': {
      rep: 20,
    },
    '19': {
      rep: 5,
    },
    '20': {
      type: 'CWE',
      rep: 20,
    },
    '21': {
      len: 4,
    },
    '33': {
      desc: 'Side of body ',
    },
  },
};

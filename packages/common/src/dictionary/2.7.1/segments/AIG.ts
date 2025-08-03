import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../../interfaces/index.js';

export const AIG: DeepPartial<HL7SegmentDefinition> = {
  fields: {
    '3': {
      type: 'CWE',
    },
    '4': {
      type: 'CWE',
    },
    '5': {
      type: 'CWE',
    },
    '7': {
      type: 'CNE',
    },
    '8': {
      type: 'DTM',
    },
    '10': {
      type: 'CNE',
    },
    '12': {
      type: 'CNE',
    },
    '14': {
      type: 'CWE',
    },
  },
};

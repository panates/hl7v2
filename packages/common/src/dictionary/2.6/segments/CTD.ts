import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../../interfaces/index.js';

export const CTD: DeepPartial<HL7SegmentDefinition> = {
  fields: {
    '1': {
      type: 'CWE',
      len: 705,
    },
    '3': {
      len: 2915,
    },
    '6': {
      type: 'CWE',
      len: 705,
    },
    '7': {
      type: 'PLN',
      table: 338,
    },
  },
};

import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../types.js';

export const BLC: DeepPartial<HL7SegmentDefinition> = {
  fields: {
    '1': {
      type: 'CWE',
    },
    '2': {
      len: 267,
    },
  },
};

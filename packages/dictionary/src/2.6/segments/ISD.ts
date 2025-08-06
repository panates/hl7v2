import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../types.js';

export const ISD: DeepPartial<HL7SegmentDefinition> = {
  fields: {
    '2': {
      type: 'CWE',
      len: 705,
    },
    '3': {
      type: 'CWE',
      len: 705,
    },
  },
};

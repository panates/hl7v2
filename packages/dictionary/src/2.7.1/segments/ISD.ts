import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../types.js';

export const ISD: DeepPartial<HL7SegmentDefinition> = {
  fields: {
    '2': {
      type: 'CWE',
    },
    '3': {
      type: 'CWE',
    },
  },
};

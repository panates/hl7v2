import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../types.js';

export const RMI: DeepPartial<HL7SegmentDefinition> = {
  fields: {
    '1': {
      type: 'CWE',
    },
    '2': {
      type: 'DTM',
      len: 24,
    },
    '3': {
      type: 'CWE',
    },
  },
};

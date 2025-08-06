import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../types.js';

export const TCC: DeepPartial<HL7SegmentDefinition> = {
  fields: {
    '1': {
      type: 'CWE',
    },
    '13': {
      type: 'CWE',
    },
    '14': {
      type: 'CWE',
    },
  },
};

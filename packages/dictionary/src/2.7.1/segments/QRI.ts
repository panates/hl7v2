import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../types.js';

export const QRI: DeepPartial<HL7SegmentDefinition> = {
  fields: {
    '3': {
      type: 'CWE',
    },
  },
};

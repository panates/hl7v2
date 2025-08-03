import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../../interfaces/index.js';

export const CSS: DeepPartial<HL7SegmentDefinition> = {
  fields: {
    '1': {
      type: 'CWE',
      opt: 'R',
    },
    '2': {
      type: 'DTM',
    },
    '3': {
      type: 'CWE',
    },
  },
};

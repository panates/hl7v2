import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../../interfaces/index.js';

export const PES: DeepPartial<HL7SegmentDefinition> = {
  fields: {
    '1': {
      rep: 'infinite',
    },
    '9': {
      type: 'DTM',
    },
    '10': {
      type: 'DTM',
    },
  },
};

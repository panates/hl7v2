import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../../interfaces/index.js';

export const NCK: DeepPartial<HL7SegmentDefinition> = {
  fields: {
    '1': {
      opt: 'R',
      rep: 1,
    },
  },
};

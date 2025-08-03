import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../../interfaces/index.js';

export const PMT: DeepPartial<HL7SegmentDefinition> = {
  fields: {
    '11': {
      opt: 'R',
    },
  },
};

import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../../interfaces/index.js';

export const IAM: DeepPartial<HL7SegmentDefinition> = {
  desc: 'Patient Adverse Reaction Information',
  fields: {
    '7': {
      opt: 'O',
      len: 427,
    },
  },
};

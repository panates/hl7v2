import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../../interfaces/index.js';

export const DRG: DeepPartial<HL7SegmentDefinition> = {
  desc: 'Diagnosis related group segment',
  fields: {
    '1': {
      len: 60,
    },
    '3': {
      len: 1,
    },
  },
};

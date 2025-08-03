import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../../interfaces/index.js';

export const NPU: DeepPartial<HL7SegmentDefinition> = {
  desc: 'Bed Status Update',
  fields: {
    '1': {
      desc: 'Bed Location',
      len: 80,
    },
    '2': {
      desc: 'Bed Status',
    },
  },
};

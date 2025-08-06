import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../types.js';

export const NPU: DeepPartial<HL7SegmentDefinition> = {
  desc: 'Bed status update segment',
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

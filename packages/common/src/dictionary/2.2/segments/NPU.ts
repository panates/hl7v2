import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../../interfaces/index.js';

export const NPU: DeepPartial<HL7SegmentDefinition> = {
  desc: 'Bed status update',
  fields: {
    '1': {
      type: 'CM_INTERNAL_LOCATION',
      desc: 'Bed Location',
    },
    '2': {
      desc: 'Bed Status',
    },
  },
};

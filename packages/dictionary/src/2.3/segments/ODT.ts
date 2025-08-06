import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../types.js';

export const ODT: DeepPartial<HL7SegmentDefinition> = {
  desc: 'Diet tray instructions segment',
  fields: {
    '3': {
      rep: 1,
    },
  },
};

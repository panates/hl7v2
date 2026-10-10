import type { DeepPartial } from 'ts-gems';
import type { HL7SegmentDefinition } from '../../types.js';

export const ODT: DeepPartial<HL7SegmentDefinition> = {
  desc: 'Diet Tray Instructions',
  fields: {
    '1': {
      table: 160,
    },
    '2': {
      rep: 10,
    },
    '3': {
      rep: 1,
    },
  },
};

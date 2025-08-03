import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../../interfaces/index.js';

export const ODT: DeepPartial<HL7SegmentDefinition> = {
  desc: 'Diet Tray Instructions',
  fields: {
    '1': {
      len: 250,
      table: 160,
    },
    '2': {
      len: 250,
    },
    '3': {
      rep: 1,
    },
  },
};

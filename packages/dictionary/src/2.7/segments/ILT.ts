import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../types.js';

export const ILT: DeepPartial<HL7SegmentDefinition> = {
  desc: 'Material Lot',
  fields: {
    '6': {
      table: 818,
    },
    '10': {
      table: 818,
    },
  },
};

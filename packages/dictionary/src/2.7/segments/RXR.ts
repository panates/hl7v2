import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../types.js';

export const RXR: DeepPartial<HL7SegmentDefinition> = {
  desc: 'Pharmacy/Treatment Route',
  fields: {
    '1': {
      table: 162,
    },
    '2': {
      desc: 'Administration Site',
    },
    '3': {
      table: 164,
    },
    '4': {
      table: 165,
    },
  },
};

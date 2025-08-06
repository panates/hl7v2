import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../types.js';

export const VND: DeepPartial<HL7SegmentDefinition> = {
  fields: {
    '1': {
      desc: 'Set Id - VND',
      len: 4,
    },
    '2': {
      desc: 'Vendor Identifier ',
    },
    '5': {
      table: 532,
    },
  },
};

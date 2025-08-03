import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../../interfaces/index.js';

export const RXR: DeepPartial<HL7SegmentDefinition> = {
  desc: 'Pharmacy/Treatment Route',
  fields: {
    '1': {
      len: 250,
      table: 162,
    },
    '2': {
      desc: 'Administration Site',
      len: 250,
      table: 163,
    },
    '3': {
      len: 250,
      table: 164,
    },
    '4': {
      len: 250,
      table: 165,
    },
    '5': {
      len: 250,
    },
  },
};

import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../../interfaces/index.js';

export const RQ1: DeepPartial<HL7SegmentDefinition> = {
  desc: 'Requisition Detail-1',
  fields: {
    '1': {
      type: 'ST',
    },
    '2': {
      desc: 'Manufacturer Identifier',
      len: 250,
    },
    '3': {
      desc: "Manufacturer's Catalog",
    },
    '4': {
      len: 250,
    },
  },
};

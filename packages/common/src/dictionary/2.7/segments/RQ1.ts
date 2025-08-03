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
      opt: 'C',
    },
    '3': {
      desc: "Manufacturer's Catalog",
      opt: 'C',
    },
    '4': {
      opt: 'C',
    },
    '5': {
      opt: 'C',
    },
  },
};

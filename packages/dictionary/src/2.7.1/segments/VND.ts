import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../types.js';

export const VND: DeepPartial<HL7SegmentDefinition> = {
  desc: 'Purchasing Vendor',
  fields: {
    '1': {
      type: 'SI',
      opt: 'R',
      rep: 1,
    },
    '2': {
      type: 'EI',
      opt: 'R',
      rep: 1,
    },
    '3': {
      type: 'ST',
      desc: 'Vendor Name',
      opt: 'O',
      rep: 1,
    },
    '4': {
      type: 'EI',
      desc: 'Vendor Catalog Number',
      opt: 'O',
      rep: 1,
    },
    '5': {
      type: 'CNE',
      desc: 'Primary Vendor Indicator',
      opt: 'O',
      rep: 1,
    },
  },
};

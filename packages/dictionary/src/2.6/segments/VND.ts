import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../types.js';

export const VND: DeepPartial<HL7SegmentDefinition> = {
  desc: 'Purchasing Vendor',
  fields: {
    '1': {
      type: 'SI',
      desc: 'Set Id вЂ“ VND',
      opt: 'R',
      rep: 1,
      len: 2,
    },
    '2': {
      type: 'EI',
      desc: 'Vendor Identifier',
      opt: 'R',
      rep: 1,
      len: 250,
    },
    '3': {
      type: 'ST',
      desc: 'Vendor Name',
      opt: 'O',
      rep: 1,
      len: 999,
    },
    '4': {
      type: 'EI',
      desc: 'Vendor Catalog Number',
      opt: 'O',
      rep: 1,
      len: 20,
    },
    '5': {
      type: 'CNE',
      desc: 'Primary Vendor Indicator',
      opt: 'O',
      rep: 1,
      len: 1,
    },
  },
};

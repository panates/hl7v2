import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../types.js';

export const RQ1: DeepPartial<HL7SegmentDefinition> = {
  desc: 'Requisition detail- ',
  fields: {
    '1': {
      type: 'SI',
      desc: 'Anticipated Price',
      opt: 'O',
      rep: 1,
      len: 10,
    },
    '2': {
      type: 'CE',
      desc: 'Manufacturer ID',
      opt: 'O',
      rep: 1,
      len: 60,
    },
    '3': {
      type: 'ST',
      desc: "Manufacturer's Catalog",
      opt: 'O',
      rep: 1,
      len: 16,
    },
    '4': {
      type: 'CE',
      desc: 'Vendor ID',
      opt: 'O',
      rep: 1,
      len: 60,
    },
    '5': {
      type: 'ST',
      desc: 'Vendor Catalog',
      opt: 'O',
      rep: 1,
      len: 16,
    },
    '6': {
      type: 'ID',
      desc: 'Taxable',
      opt: 'O',
      rep: 1,
      len: 1,
      table: 136,
    },
    '7': {
      type: 'ID',
      desc: 'Substitute Allowed',
      opt: 'O',
      rep: 1,
      len: 1,
      table: 136,
    },
  },
};

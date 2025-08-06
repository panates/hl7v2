import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../types.js';

export const RQ1: DeepPartial<HL7SegmentDefinition> = {
  fields: {
    '1': {
      desc: 'Anticipated Price',
      opt: 'O',
      rep: 1,
    },
    '2': {
      type: 'CWE',
      rep: 1,
      table: 385,
    },
    '3': {
      type: 'ST',
      rep: 1,
    },
    '4': {
      type: 'CWE',
      desc: 'Vendor ID',
      rep: 1,
    },
    '5': {
      type: 'ST',
      desc: 'Vendor Catalog',
      rep: 1,
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

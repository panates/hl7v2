import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../types.js';

export const ITM: DeepPartial<HL7SegmentDefinition> = {
  desc: 'Material Item',
  fields: {
    '1': {
      type: 'EI',
      desc: 'Item Identifier',
      opt: 'R',
      rep: 1,
      len: 250,
    },
    '2': {
      type: 'ST',
      desc: 'Item Description',
      opt: 'O',
      rep: 1,
      len: 999,
    },
    '3': {
      type: 'CWE',
      desc: 'Item Status',
      opt: 'O',
      rep: 1,
      len: 250,
      table: 776,
    },
    '4': {
      type: 'CWE',
      desc: 'Item Type',
      opt: 'O',
      rep: 1,
      len: 250,
      table: 778,
    },
    '5': {
      type: 'CWE',
      desc: 'Item Category',
      opt: 'O',
      rep: 1,
      len: 250,
    },
    '6': {
      type: 'CNE',
      desc: 'Subject to Expiration Indicator',
      opt: 'O',
      rep: 1,
      len: 4,
      table: 532,
    },
  },
};

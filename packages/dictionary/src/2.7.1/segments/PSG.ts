import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../types.js';

export const PSG: DeepPartial<HL7SegmentDefinition> = {
  desc: 'Product/Service Group',
  fields: {
    '1': {
      type: 'EI',
      desc: 'Provider Product/Service Group Number',
      opt: 'R',
      rep: 1,
    },
    '2': {
      type: 'EI',
      desc: 'Payer Product/Service Group Number',
      opt: 'O',
      rep: 1,
    },
    '3': {
      type: 'SI',
      desc: 'Product/Service Group Sequence Number',
      opt: 'R',
      rep: 1,
      len: 4,
    },
    '4': {
      type: 'ID',
      desc: 'Adjudicate as Group',
      opt: 'R',
      rep: 1,
      len: 1,
      table: 136,
    },
    '5': {
      type: 'CP',
      desc: 'Product/Service Group Billed Amount',
      opt: 'R',
      rep: 1,
    },
    '6': {
      type: 'ST',
      desc: 'Product/Service Group Description',
      opt: 'R',
      rep: 1,
    },
  },
};

import { HL7SegmentDefinition } from '../../types.js';

export const ORO: HL7SegmentDefinition = {
  desc: 'Order other',
  fields: {
    '1': {
      type: 'CE',
      desc: 'Order item id',
      opt: 'O',
      rep: 1,
      len: 200,
    },
    '2': {
      type: 'ID',
      desc: 'Substitute allowed',
      opt: 'O',
      rep: 1,
      len: 1,
    },
    '3': {
      type: 'CN',
      desc: 'Results copies to',
      opt: 'O',
      rep: 'infinite',
      len: 80,
    },
    '4': {
      type: 'ID',
      desc: 'Stock location',
      opt: 'O',
      rep: 1,
      len: 2,
      table: 12,
    },
  },
};

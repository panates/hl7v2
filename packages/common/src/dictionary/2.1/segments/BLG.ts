import { HL7SegmentDefinition } from '../../../interfaces/index.js';

export const BLG: HL7SegmentDefinition = {
  desc: 'Billing',
  fields: {
    '1': {
      type: 'CM',
      desc: 'When to charge',
      opt: 'O',
      rep: 1,
      len: 15,
    },
    '2': {
      type: 'ID',
      desc: 'Charge type',
      opt: 'O',
      rep: 1,
      len: 50,
      table: 122,
    },
    '3': {
      type: 'CM',
      desc: 'Account id',
      opt: 'O',
      rep: 1,
      len: 100,
    },
  },
};

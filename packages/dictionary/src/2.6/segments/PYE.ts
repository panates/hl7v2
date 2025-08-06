import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../types.js';

export const PYE: DeepPartial<HL7SegmentDefinition> = {
  desc: 'Payee Information',
  fields: {
    '1': {
      type: 'SI',
      desc: 'Set ID вЂ“ PYE',
      opt: 'R',
      rep: 1,
      len: 4,
    },
    '2': {
      type: 'IS',
      desc: 'Payee Type',
      opt: 'R',
      rep: 1,
      len: 6,
      table: 557,
    },
    '3': {
      type: 'IS',
      desc: 'Payee Relationship to Invoice (Patient)',
      opt: 'O',
      rep: 1,
      len: 2,
      table: 558,
    },
    '4': {
      type: 'XON',
      desc: 'Payee Identification List',
      opt: 'O',
      rep: 'infinite',
      len: 183,
    },
    '5': {
      type: 'XPN',
      desc: 'Payee Person Name',
      opt: 'O',
      rep: 'infinite',
      len: 466,
    },
    '6': {
      type: 'XAD',
      desc: 'Payee Address',
      opt: 'O',
      rep: 'infinite',
      len: 235,
    },
    '7': {
      type: 'IS',
      desc: 'Payment Method',
      opt: 'O',
      rep: 1,
      len: 80,
      table: 570,
    },
  },
};

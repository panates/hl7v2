import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../../interfaces/index.js';

export const PYE: DeepPartial<HL7SegmentDefinition> = {
  desc: 'Payee Information',
  fields: {
    '1': {
      type: 'SI',
      opt: 'R',
      rep: 1,
      len: 4,
    },
    '2': {
      desc: 'Payee Type',
      opt: 'R',
      rep: 1,
      table: 557,
    },
    '3': {
      desc: 'Payee Relationship to Invoice (Patient)',
      rep: 1,
      table: 558,
    },
    '4': {
      type: 'XON',
      desc: 'Payee Identification List',
    },
    '5': {
      type: 'XPN',
      desc: 'Payee Person Name',
    },
    '6': {
      type: 'XAD',
      desc: 'Payee Address',
    },
    '7': {
      desc: 'Payment Method',
      opt: 'O',
      rep: 1,
      table: 570,
    },
  },
};

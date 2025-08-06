import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../types.js';

export const PCE: DeepPartial<HL7SegmentDefinition> = {
  desc: 'Patient Charge Cost Center Exception',
  fields: {
    '1': {
      type: 'SI',
      desc: 'Set ID вЂ“ PCE',
      opt: 'R',
      rep: 1,
      len: 2,
    },
    '2': {
      type: 'IS',
      desc: 'Cost Center Account Number',
      opt: 'O',
      rep: 1,
      len: 30,
      table: 319,
    },
    '3': {
      type: 'CWE',
      desc: 'Transaction Code',
      opt: 'O',
      rep: 1,
      len: 250,
      table: 132,
    },
    '4': {
      type: 'CP',
      desc: 'Transaction Amount - Unit',
      opt: 'O',
      rep: 1,
      len: 12,
    },
  },
};

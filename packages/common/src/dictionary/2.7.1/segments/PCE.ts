import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../../interfaces/index.js';

export const PCE: DeepPartial<HL7SegmentDefinition> = {
  fields: {
    '1': {
      type: 'SI',
      opt: 'R',
      rep: 1,
    },
    '2': {
      desc: 'Cost Center Account Number',
      opt: 'O',
      rep: 1,
      table: 319,
    },
    '3': {
      type: 'CWE',
      desc: 'Transaction Code',
      opt: 'O',
      rep: 1,
      table: 132,
    },
    '4': {
      type: 'CP',
      desc: 'Transaction Amount - Unit',
      opt: 'O',
      rep: 1,
    },
  },
};

import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../types.js';

export const BLG: DeepPartial<HL7SegmentDefinition> = {
  fields: {
    '1': {
      type: 'CCD',
      desc: 'When to Charge',
    },
    '2': {
      desc: 'Charge Type',
    },
    '3': {
      type: 'CX',
      desc: 'Account ID',
    },
    '4': {
      type: 'CWE',
      desc: 'Charge Type Reason',
      opt: 'O',
      rep: 1,
      len: 60,
      table: 475,
    },
  },
};

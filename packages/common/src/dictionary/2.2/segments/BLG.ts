import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../../interfaces/index.js';

export const BLG: DeepPartial<HL7SegmentDefinition> = {
  fields: {
    '1': {
      type: 'CM_CCD',
      desc: 'When to Charge',
    },
    '2': {
      desc: 'Charge Type',
    },
    '3': {
      type: 'CK',
      desc: 'Account ID',
    },
  },
};

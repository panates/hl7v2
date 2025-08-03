import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../../interfaces/index.js';

export const BLG: DeepPartial<HL7SegmentDefinition> = {
  desc: 'Billing segment',
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
  },
};

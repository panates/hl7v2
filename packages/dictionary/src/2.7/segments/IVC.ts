import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../types.js';

export const IVC: DeepPartial<HL7SegmentDefinition> = {
  desc: 'Invoice Segment',
  fields: {
    '4': {
      type: 'CWE',
    },
    '5': {
      type: 'CWE',
    },
    '6': {
      type: 'CWE',
    },
    '23': {
      opt: 'C',
    },
    '24': {
      len: 5,
    },
    '25': {
      type: 'CWE',
    },
    '28': {
      type: 'CWE',
      desc: 'Provider Tax Status',
    },
    '29': {
      type: 'CWE',
      desc: 'Payer Tax Status',
    },
  },
};

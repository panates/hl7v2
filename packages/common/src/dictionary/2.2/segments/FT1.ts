import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../../interfaces/index.js';

export const FT1: DeepPartial<HL7SegmentDefinition> = {
  fields: {
    '1': {
      desc: 'Set ID - financial transaction',
    },
    '2': {
      desc: 'Transaction ID',
    },
    '3': {
      desc: 'Transaction batch ID',
      len: 10,
    },
    '7': {
      type: 'CE',
    },
    '9': {
      desc: 'Transaction description - alternate',
    },
    '10': {
      desc: 'Transaction quantity',
      len: 4,
    },
    '11': {
      desc: 'Transaction amount - extended',
      len: 12,
    },
    '13': {
      type: 'CE',
      len: 60,
    },
    '14': {
      desc: 'Insurance plan ID',
      opt: 'R',
    },
    '16': {
      type: 'CM_INTERNAL_LOCATION',
      desc: 'Assigned Patient Location',
    },
    '19': {
      type: 'CE',
      rep: 'infinite',
    },
    '23': {
      type: 'CM_FILLER',
      desc: 'Filler Order Number',
      opt: 'O',
      rep: 1,
      len: 75,
    },
  },
};

import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../../interfaces/index.js';

export const ORC: DeepPartial<HL7SegmentDefinition> = {
  fields: {
    '1': {
      type: 'ID',
      desc: 'Order Control',
      opt: 'O',
      table: 119,
    },
    '2': {
      desc: 'Placer Order Number',
      rep: 1,
    },
    '3': {
      desc: 'Filler Order Number',
    },
    '4': {
      desc: 'Placer Group Number',
    },
    '5': {
      type: 'ID',
      desc: 'Order Status',
      table: 38,
    },
    '6': {
      type: 'ID',
      desc: 'Response Flag',
      table: 121,
    },
    '7': {
      type: 'TQ',
      opt: 'O',
    },
    '8': {
      type: 'EIP',
      desc: 'Parent Order',
    },
    '9': {
      len: 26,
    },
    '10': {
      desc: 'Entered By',
      rep: 'infinite',
    },
    '11': {
      desc: 'Verified By',
      rep: 'infinite',
    },
    '12': {
      desc: 'Ordering Provider',
    },
    '13': {
      desc: 'Enterer s Location',
    },
    '14': {
      type: 'XTN',
      desc: 'Call Back Phone Number',
    },
    '15': {
      type: 'TS',
      opt: 'O',
      rep: 1,
      len: 26,
    },
    '16': {
      type: 'CE',
      desc: 'Order Control Code Reason',
      opt: 'O',
      rep: 1,
      len: 200,
    },
    '17': {
      type: 'CE',
      desc: 'Entering Organization',
      opt: 'O',
      rep: 1,
      len: 60,
    },
    '18': {
      type: 'CE',
      desc: 'Entering Device',
      opt: 'O',
      rep: 1,
      len: 60,
    },
    '19': {
      opt: 'O',
      rep: 'infinite',
    },
    '20': {
      type: 'CE',
      desc: 'Advanced Beneficiary Notice Code',
      opt: 'O',
      rep: 1,
      len: 40,
    },
    '21': {
      type: 'XON',
      desc: 'Ordering Facility Name',
      opt: 'O',
      rep: 'infinite',
      len: 60,
    },
    '22': {
      type: 'XAD',
      desc: 'Ordering Facility Address',
      opt: 'O',
      rep: 'infinite',
      len: 106,
    },
    '23': {
      type: 'XTN',
      desc: 'Ordering Facility Phone Number',
      opt: 'O',
      rep: 'infinite',
      len: 48,
    },
    '24': {
      type: 'XAD',
      desc: 'Ordering Provider Address',
      opt: 'O',
      rep: 'infinite',
      len: 106,
    },
  },
};

import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../types.js';

export const ORC: DeepPartial<HL7SegmentDefinition> = {
  desc: 'Commom order',
  fields: {
    '1': {
      type: 'ID',
      desc: 'Order Control',
      table: 119,
    },
    '2': {
      type: 'CM_PLACER',
      desc: 'Placer Order Number',
    },
    '3': {
      type: 'CM_FILLER',
      desc: 'Filler Order Number',
    },
    '4': {
      type: 'CM_GROUP_ID',
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
      desc: 'Quantity / timing',
      rep: 'infinite',
    },
    '8': {
      type: 'CM_EIP',
      desc: 'Parent Order',
    },
    '9': {
      desc: 'Date / time of transaction',
      len: 26,
    },
    '10': {
      desc: 'Entered By',
    },
    '11': {
      desc: 'Verified By',
    },
    '12': {
      desc: 'Ordering Provider',
    },
    '13': {
      type: 'CM_PARENT_RESULT',
      desc: "Enterer's Location",
    },
    '14': {
      desc: 'Call Back Phone Number',
    },
    '15': {
      type: 'TS',
      desc: 'Order effective date / time',
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
      type: 'CN',
      desc: 'Action by',
      opt: 'O',
      rep: 1,
      len: 80,
    },
  },
};

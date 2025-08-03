import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../../interfaces/index.js';

export const ORC: DeepPartial<HL7SegmentDefinition> = {
  fields: {
    '1': {
      type: 'ID',
      desc: 'Order Control',
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
    '8': {
      type: 'EIP',
      desc: 'Parent Order',
    },
    '9': {
      type: 'DTM',
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
    '14': {
      type: 'XTN',
      desc: 'Call Back Phone Number',
    },
    '15': {
      type: 'DTM',
      opt: 'O',
      rep: 1,
    },
    '16': {
      type: 'CWE',
      desc: 'Order Control Code Reason',
      opt: 'O',
      rep: 1,
    },
    '17': {
      type: 'CWE',
      desc: 'Entering Organization',
      opt: 'O',
      rep: 1,
    },
    '18': {
      type: 'CWE',
      desc: 'Entering Device',
      opt: 'O',
      rep: 1,
    },
    '19': {
      opt: 'O',
      rep: 'infinite',
    },
    '20': {
      type: 'CWE',
      desc: 'Advanced Beneficiary Notice Code',
      opt: 'O',
      rep: 1,
    },
    '21': {
      type: 'XON',
      desc: 'Ordering Facility Name',
      opt: 'O',
      rep: 'infinite',
    },
    '22': {
      type: 'XAD',
      desc: 'Ordering Facility Address',
      opt: 'O',
      rep: 'infinite',
    },
    '23': {
      type: 'XTN',
      desc: 'Ordering Facility Phone Number',
      opt: 'O',
      rep: 'infinite',
    },
    '24': {
      type: 'XAD',
      desc: 'Ordering Provider Address',
      opt: 'O',
      rep: 'infinite',
    },
    '26': {
      type: 'CWE',
      desc: 'Advanced Beneficiary Notice Override Reason',
      rep: 1,
      table: 552,
    },
    '27': {
      type: 'DTM',
      desc: "Filler's Expected Availability Date/Time",
      opt: 'O',
      rep: 1,
    },
    '28': {
      type: 'CWE',
      desc: 'Confidentiality Code',
      opt: 'O',
      rep: 1,
      table: 177,
    },
    '29': {
      type: 'CWE',
      desc: 'Order Type',
      opt: 'O',
      rep: 1,
      table: 482,
    },
    '30': {
      type: 'CNE',
      desc: 'Enterer Authorization Mode',
      opt: 'O',
      rep: 1,
      table: 483,
    },
  },
};

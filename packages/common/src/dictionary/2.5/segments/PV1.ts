import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../../interfaces/index.js';

export const PV1: DeepPartial<HL7SegmentDefinition> = {
  desc: 'Patient Visit',
  fields: {
    '1': {
      desc: 'Set ID - PV1',
    },
    '2': {
      type: 'IS',
      desc: 'Patient Class',
    },
    '3': {
      desc: 'Assigned Patient Location',
      opt: 'O',
      len: 80,
    },
    '4': {
      type: 'IS',
      desc: 'Admission Type',
    },
    '5': {
      desc: 'Preadmit Number',
    },
    '6': {
      desc: 'Prior Patient Location',
      len: 80,
    },
    '7': {
      desc: 'Attending Doctor',
      rep: 'infinite',
    },
    '8': {
      desc: 'Referring Doctor',
      rep: 'infinite',
    },
    '9': {
      desc: 'Consulting Doctor',
    },
    '10': {
      type: 'IS',
      desc: 'Hospital Service',
    },
    '11': {
      desc: 'Temporary Location',
      len: 80,
    },
    '12': {
      type: 'IS',
      desc: 'Preadmit Test Indicator',
    },
    '13': {
      type: 'IS',
      desc: 'Re-admission Indicator',
    },
    '14': {
      type: 'IS',
      desc: 'Admit Source',
    },
    '15': {
      desc: 'Ambulatory Status',
      rep: 'infinite',
    },
    '16': {
      type: 'IS',
      desc: 'VIP Indicator',
    },
    '17': {
      desc: 'Admitting Doctor',
      rep: 'infinite',
    },
    '18': {
      type: 'IS',
    },
    '19': {
      desc: 'Visit Number',
    },
    '20': {
      desc: 'Financial Class',
      len: 50,
    },
    '21': {
      type: 'IS',
      desc: 'Charge Price Indicator',
    },
    '22': {
      type: 'IS',
      desc: 'Courtesy Code',
    },
    '23': {
      type: 'IS',
      desc: 'Credit Rating',
    },
    '24': {
      type: 'IS',
      desc: 'Contract Code',
    },
    '25': {
      desc: 'Contract Effective Date',
    },
    '26': {
      desc: 'Contract Amount',
    },
    '27': {
      desc: 'Contract Period',
    },
    '28': {
      type: 'IS',
      desc: 'Interest Code',
    },
    '29': {
      type: 'IS',
      len: 4,
    },
    '31': {
      type: 'IS',
      desc: 'Bad Debt Agency Code',
      table: 21,
    },
    '32': {
      desc: 'Bad Debt Transfer Amount',
    },
    '33': {
      desc: 'Bad Debt Recovery Amount',
    },
    '34': {
      type: 'IS',
      desc: 'Delete Account Indicator',
    },
    '35': {
      desc: 'Delete Account Date',
    },
    '36': {
      type: 'IS',
      desc: 'Discharge Disposition',
      len: 3,
    },
    '37': {
      type: 'DLD',
      desc: 'Discharged to Location',
      len: 47,
    },
    '38': {
      type: 'CE',
      desc: 'Diet Type',
    },
    '39': {
      type: 'IS',
      desc: 'Servicing Facility',
    },
    '40': {
      desc: 'Bed Status',
    },
    '41': {
      type: 'IS',
      desc: 'Account Status',
    },
    '42': {
      desc: 'Pending Location',
      len: 80,
    },
    '43': {
      desc: 'Prior Temporary Location',
      len: 80,
    },
    '44': {
      len: 26,
    },
    '45': {
      len: 26,
    },
    '46': {
      desc: 'Current Patient Balance',
    },
    '47': {
      desc: 'Total Charges',
    },
    '48': {
      desc: 'Total Adjustments',
    },
    '49': {
      desc: 'Total Payments',
    },
    '50': {
      desc: 'Alternate Visit ID',
      opt: 'O',
      rep: 1,
    },
  },
};

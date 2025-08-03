import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../../interfaces/index.js';

export const PV1: DeepPartial<HL7SegmentDefinition> = {
  desc: 'Patient Visit',
  fields: {
    '1': {
      desc: 'Set ID - PV1',
    },
    '2': {
      desc: 'Patient Class',
    },
    '3': {
      desc: 'Assigned Patient Location',
      opt: 'O',
    },
    '4': {
      desc: 'Admission Type',
    },
    '5': {
      desc: 'Preadmit Number',
    },
    '6': {
      desc: 'Prior Patient Location',
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
      desc: 'Hospital Service',
    },
    '11': {
      desc: 'Temporary Location',
    },
    '12': {
      desc: 'Preadmit Test Indicator',
    },
    '13': {
      desc: 'Re-admission Indicator',
    },
    '14': {
      desc: 'Admit Source',
    },
    '15': {
      desc: 'Ambulatory Status',
      rep: 'infinite',
    },
    '16': {
      desc: 'VIP Indicator',
    },
    '17': {
      desc: 'Admitting Doctor',
      rep: 'infinite',
    },
    '19': {
      desc: 'Visit Number',
    },
    '20': {
      desc: 'Financial Class',
    },
    '21': {
      desc: 'Charge Price Indicator',
    },
    '22': {
      desc: 'Courtesy Code',
    },
    '23': {
      desc: 'Credit Rating',
    },
    '24': {
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
      desc: 'Interest Code',
    },
    '31': {
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
      desc: 'Delete Account Indicator',
    },
    '35': {
      desc: 'Delete Account Date',
    },
    '36': {
      desc: 'Discharge Disposition',
    },
    '37': {
      type: 'DLD',
      desc: 'Discharged to Location',
    },
    '38': {
      type: 'CWE',
      desc: 'Diet Type',
    },
    '39': {
      desc: 'Servicing Facility',
    },
    '40': {
      desc: 'Bed Status',
    },
    '41': {
      desc: 'Account Status',
    },
    '42': {
      desc: 'Pending Location',
    },
    '43': {
      desc: 'Prior Temporary Location',
    },
    '44': {
      type: 'DTM',
    },
    '45': {
      type: 'DTM',
      rep: 1,
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

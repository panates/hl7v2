import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../../interfaces/index.js';

export const PV1: DeepPartial<HL7SegmentDefinition> = {
  fields: {
    '1': {
      desc: 'Set ID - Patient Visit',
    },
    '2': {
      desc: 'Patient Class',
    },
    '3': {
      type: 'CM_INTERNAL_LOCATION',
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
      type: 'CM_INTERNAL_LOCATION',
      desc: 'Prior Patient Location',
    },
    '7': {
      desc: 'Attending Doctor',
    },
    '8': {
      desc: 'Referring Doctor',
    },
    '9': {
      desc: 'Consulting Doctor',
    },
    '10': {
      desc: 'Hospital Service',
    },
    '11': {
      type: 'CM_INTERNAL_LOCATION',
      desc: 'Temporary Location',
    },
    '12': {
      desc: 'Preadmit Test Indicator',
    },
    '13': {
      desc: 'Readmission indicator',
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
    },
    '19': {
      type: 'CM_PAT_ID',
      desc: 'Visit Number',
      len: 15,
    },
    '20': {
      type: 'CM_FINANCE',
      desc: 'Financial Class',
      len: 50,
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
    '29': {
      desc: 'Transfer to bad debt - code',
    },
    '30': {
      desc: 'Transfer to bad debt - date',
    },
    '31': {
      type: 'ID',
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
      len: 3,
    },
    '37': {
      type: 'CM_DLD',
      desc: 'Discharged to Location',
      len: 25,
    },
    '38': {
      desc: 'Diet Type',
    },
    '39': {
      desc: 'Servicing Facility',
      len: 4,
    },
    '40': {
      desc: 'Bed Status',
    },
    '41': {
      desc: 'Account Status',
    },
    '42': {
      type: 'CM_INTERNAL_LOCATION',
      desc: 'Pending Location',
    },
    '43': {
      type: 'CM_INTERNAL_LOCATION',
      desc: 'Prior Temporary Location',
    },
    '44': {
      desc: 'Admit date / time',
      len: 26,
    },
    '45': {
      desc: 'Discharge date / time',
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
      type: 'CM_PAT_ID_0192',
      desc: 'Alternate Visit ID',
      opt: 'O',
      rep: 1,
      len: 20,
    },
  },
};

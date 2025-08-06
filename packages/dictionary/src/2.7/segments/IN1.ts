import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../types.js';

export const IN1: DeepPartial<HL7SegmentDefinition> = {
  desc: 'Insurance',
  fields: {
    '1': {
      type: 'SI',
      opt: 'R',
      rep: 1,
      len: 4,
    },
    '2': {
      desc: 'Health Plan ID',
      rep: 1,
      table: 72,
    },
    '3': {
      type: 'CX',
      desc: 'Insurance Company ID',
      opt: 'R',
    },
    '4': {
      type: 'XON',
      desc: 'Insurance Company Name',
      opt: 'O',
    },
    '5': {
      type: 'XAD',
      desc: 'Insurance Company Address',
      opt: 'O',
    },
    '6': {
      type: 'XPN',
      opt: 'O',
    },
    '7': {
      type: 'XTN',
      desc: 'Insurance Co Phone Number',
      opt: 'O',
    },
    '8': {
      type: 'ST',
      desc: 'Group Number',
      opt: 'O',
      rep: 1,
    },
    '9': {
      type: 'XON',
      desc: 'Group Name',
      opt: 'O',
    },
    '10': {
      type: 'CX',
      desc: "Insured's Group Emp ID",
      opt: 'O',
    },
    '11': {
      type: 'XON',
      desc: "Insured's Group Emp Name",
      opt: 'O',
    },
    '12': {
      type: 'DT',
      desc: 'Plan Effective Date',
      opt: 'O',
      rep: 1,
    },
    '13': {
      type: 'DT',
      desc: 'Plan Expiration Date',
      opt: 'O',
      rep: 1,
    },
    '14': {
      desc: 'Authorization Information',
      opt: 'O',
      rep: 1,
    },
    '15': {
      type: 'CWE',
      desc: 'Plan Type',
      opt: 'O',
      rep: 1,
      table: 86,
    },
    '16': {
      type: 'XPN',
      opt: 'O',
    },
    '17': {
      desc: "Insured's Relationship To Patient",
      opt: 'O',
      rep: 1,
      table: 63,
    },
    '18': {
      desc: "Insured's Date Of Birth",
      opt: 'O',
      rep: 1,
    },
    '19': {
      type: 'XAD',
      desc: "Insured's Address",
      opt: 'O',
    },
    '20': {
      type: 'CWE',
      opt: 'O',
      rep: 1,
    },
    '21': {
      type: 'CWE',
      opt: 'O',
      rep: 1,
    },
    '22': {
      type: 'ST',
      opt: 'O',
      rep: 1,
    },
    '23': {
      type: 'ID',
      opt: 'O',
      rep: 1,
    },
    '24': {
      type: 'DT',
      opt: 'O',
      rep: 1,
    },
    '25': {
      type: 'ID',
      opt: 'O',
      rep: 1,
      table: 136,
    },
    '26': {
      type: 'DT',
      opt: 'O',
      rep: 1,
    },
    '27': {
      type: 'CWE',
      desc: 'Release Information Code',
      opt: 'O',
      rep: 1,
      table: 93,
    },
    '28': {
      type: 'ST',
      desc: 'Pre-Admit Cert (PAC)',
      opt: 'O',
      rep: 1,
    },
    '29': {
      desc: 'Verification Date/Time',
      opt: 'O',
      rep: 1,
    },
    '30': {
      desc: 'Verification By',
      opt: 'O',
    },
    '31': {
      type: 'CWE',
      opt: 'O',
      rep: 1,
      table: 98,
    },
    '32': {
      type: 'CWE',
      desc: 'Billing Status',
      opt: 'O',
      rep: 1,
      table: 22,
    },
    '33': {
      type: 'NM',
      desc: 'Lifetime Reserve Days',
      opt: 'O',
      rep: 1,
    },
    '34': {
      type: 'NM',
      opt: 'O',
      rep: 1,
    },
    '35': {
      type: 'CWE',
      desc: 'Company Plan Code',
      opt: 'O',
      rep: 1,
    },
    '36': {
      type: 'ST',
      desc: 'Policy Number',
      opt: 'O',
      rep: 1,
    },
    '37': {
      type: 'CP',
      desc: 'Policy Deductible',
      opt: 'O',
      rep: 1,
    },
    '38': {
      type: 'ST',
      desc: 'Policy Limit - Amount',
      opt: 'B',
      rep: 1,
    },
    '39': {
      type: 'NM',
      desc: 'Policy Limit - Days',
      opt: 'O',
      rep: 1,
    },
    '40': {
      type: 'ST',
      desc: 'Room Rate - Semi-Private',
      opt: 'B',
      rep: 1,
    },
    '41': {
      type: 'ST',
      desc: 'Room Rate - Private',
      opt: 'B',
      rep: 1,
    },
    '42': {
      desc: "Insured's Employment Status",
      opt: 'O',
      rep: 1,
      table: 66,
    },
    '43': {
      type: 'CWE',
      desc: "Insured's Administrative Sex",
      opt: 'O',
      rep: 1,
      table: 1,
    },
    '44': {
      type: 'XAD',
      desc: "Insured's Employer's Address",
      opt: 'O',
    },
    '45': {
      desc: 'Verification Status',
    },
    '46': {
      type: 'CWE',
      desc: 'Prior Insurance Plan ID',
    },
    '47': {
      type: 'CWE',
      desc: 'Coverage Type',
      opt: 'O',
      rep: 1,
      table: 309,
    },
    '48': {
      type: 'CWE',
      desc: 'Handicap ',
      opt: 'O',
      rep: 1,
    },
    '49': {
      type: 'CX',
      desc: "Insured's ID Number",
      opt: 'O',
    },
    '50': {
      type: 'CWE',
    },
    '52': {
      desc: "Insured's Birth Place",
    },
    '53': {
      type: 'CWE',
    },
    '54': {
      type: 'CX',
      desc: 'External Health Plan Identifiers',
      opt: 'O',
      rep: 'infinite',
    },
  },
};

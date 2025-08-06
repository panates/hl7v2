import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../types.js';

export const IN2: DeepPartial<HL7SegmentDefinition> = {
  desc: 'Insurance Additional Information',
  fields: {
    '1': {
      type: 'CX',
      desc: "Insured's Employee ID",
    },
    '2': {
      desc: "Insured's Social Security Number",
    },
    '3': {
      type: 'XCN',
      desc: "Insured's Employer's Name and ID",
    },
    '4': {
      type: 'CWE',
      desc: 'Employer Information Data',
    },
    '5': {
      type: 'CWE',
      desc: 'Mail Claim Party',
    },
    '6': {
      type: 'ST',
      desc: 'Medicare Health Ins Card Number',
    },
    '7': {
      type: 'XPN',
      desc: 'Medicaid Case Name',
    },
    '8': {
      type: 'ST',
      desc: 'Medicaid Case Number',
    },
    '9': {
      type: 'XPN',
    },
    '10': {
      type: 'ST',
    },
    '11': {
      table: 342,
    },
    '14': {
      type: 'CWE',
    },
    '15': {
      type: 'CWE',
    },
    '16': {
      type: 'CWE',
    },
    '19': {
      desc: 'Baby Coverage',
    },
    '20': {
      desc: 'Combine Baby Bill',
    },
    '21': {
      type: 'ST',
      desc: 'Blood Deductible',
    },
    '22': {
      type: 'XPN',
      desc: 'Special Coverage Approval Name',
    },
    '23': {
      desc: 'Special Coverage Approval Title',
    },
    '24': {
      type: 'CWE',
      desc: 'Non-Covered Insurance Code',
    },
    '25': {
      type: 'CX',
    },
    '26': {
      type: 'CX',
      desc: 'Payor Subscriber ID',
    },
    '27': {
      type: 'CWE',
      desc: 'Eligibility Source',
    },
    '28': {
      desc: 'Room Coverage Type/Amount',
    },
    '29': {
      desc: 'Policy Type/Amount',
    },
    '30': {
      desc: 'Daily Deductible',
    },
    '31': {
      type: 'CWE',
      desc: 'Living Dependency',
      opt: 'O',
      rep: 1,
      table: 223,
    },
    '32': {
      type: 'CWE',
      desc: 'Ambulatory Status',
      opt: 'O',
      table: 9,
    },
    '33': {
      desc: 'Citizenship ',
      opt: 'O',
      table: 171,
    },
    '34': {
      desc: 'Primary Language',
      opt: 'O',
      rep: 1,
      table: 296,
    },
    '35': {
      type: 'CWE',
      desc: 'Living Arrangement ',
      opt: 'O',
      rep: 1,
      table: 220,
    },
    '36': {
      opt: 'O',
      rep: 1,
      table: 215,
    },
    '37': {
      type: 'ID',
      desc: 'Protection Indicator',
      opt: 'O',
      rep: 1,
      len: 1,
      table: 136,
    },
    '38': {
      type: 'CWE',
      desc: 'Student Indicator ',
      opt: 'O',
      rep: 1,
      table: 231,
    },
    '39': {
      desc: 'Religion ',
      opt: 'O',
      rep: 1,
      table: 6,
    },
    '40': {
      type: 'XPN',
      desc: "Mother's Maiden Name",
      opt: 'O',
    },
    '41': {
      desc: 'Nationality ',
      opt: 'O',
      rep: 1,
      table: 212,
    },
    '42': {
      desc: 'Ethnic Group ',
      opt: 'O',
      table: 189,
    },
    '43': {
      desc: 'Marital Status ',
      opt: 'O',
      rep: 'infinite',
      table: 2,
    },
    '44': {
      type: 'DT',
      desc: "Insured's Employment Start Date",
      opt: 'O',
      rep: 1,
    },
    '45': {
      type: 'DT',
      desc: 'Employment Stop Date',
      opt: 'O',
      rep: 1,
    },
    '46': {
      type: 'ST',
      desc: 'Job Title',
      opt: 'O',
      rep: 1,
    },
    '47': {
      type: 'JCC',
      desc: 'Job Code/Class',
      opt: 'O',
      rep: 1,
    },
    '48': {
      type: 'CWE',
      desc: 'Job Status ',
      opt: 'O',
      rep: 1,
      table: 311,
    },
    '49': {
      type: 'XPN',
      desc: 'Employer Contact Person Name',
      opt: 'O',
      rep: 'infinite',
    },
    '50': {
      type: 'XTN',
      desc: 'Employer Contact Person Phone Number',
      opt: 'O',
      rep: 'infinite',
    },
    '51': {
      type: 'CWE',
      desc: 'Employer Contact Reason ',
      opt: 'O',
      rep: 1,
      table: 222,
    },
    '52': {
      type: 'XPN',
      desc: "Insured's Contact Person's Name",
      opt: 'O',
      rep: 'infinite',
    },
    '53': {
      type: 'XTN',
      desc: "Insured's Contact Person Phone Number",
      opt: 'O',
      rep: 'infinite',
    },
    '54': {
      type: 'CWE',
      desc: "Insured's Contact Person Reason ",
      opt: 'O',
      rep: 'infinite',
      table: 222,
    },
    '55': {
      type: 'DT',
      opt: 'O',
      rep: 1,
    },
    '56': {
      type: 'DT',
      opt: 'O',
      rep: 'infinite',
    },
    '57': {
      type: 'CWE',
      desc: 'Insurance Co Contact Reason ',
      opt: 'O',
      rep: 1,
      table: 232,
    },
    '58': {
      type: 'XTN',
      opt: 'O',
      rep: 'infinite',
    },
    '59': {
      type: 'CWE',
      desc: 'Policy Scope ',
      opt: 'O',
      rep: 1,
      table: 312,
    },
    '60': {
      type: 'CWE',
      desc: 'Policy Source ',
      opt: 'O',
      rep: 1,
      table: 313,
    },
    '61': {
      type: 'CX',
      desc: 'Patient Member Number',
      opt: 'O',
      rep: 1,
    },
    '62': {
      desc: "Guarantor's Relationship to Insured",
      opt: 'O',
      rep: 1,
      table: 63,
    },
    '63': {
      type: 'XTN',
      desc: "Insured's Phone Number - Home",
      opt: 'O',
      rep: 'infinite',
    },
    '64': {
      type: 'XTN',
      desc: "Insured's Employer Phone Number",
      opt: 'O',
      rep: 'infinite',
    },
    '65': {
      desc: 'Military Handicapped Program ',
      opt: 'O',
      rep: 1,
      table: 343,
    },
    '66': {
      type: 'ID',
      desc: 'Suspend Flag',
      opt: 'O',
      rep: 1,
      table: 136,
    },
    '67': {
      type: 'ID',
      opt: 'O',
      rep: 1,
      table: 136,
    },
    '68': {
      type: 'ID',
      desc: 'Stoploss Limit Flag',
      opt: 'O',
      rep: 1,
      table: 136,
    },
    '69': {
      type: 'XON',
      opt: 'O',
      rep: 'infinite',
    },
    '70': {
      type: 'XON',
      opt: 'O',
      rep: 'infinite',
    },
    '71': {
      desc: 'Race',
      opt: 'O',
      table: 5,
    },
    '72': {
      desc: "Patient's Relationship to Insured",
      opt: 'O',
      rep: 1,
      table: 344,
    },
  },
};

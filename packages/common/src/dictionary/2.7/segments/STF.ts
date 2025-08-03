import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../../interfaces/index.js';

export const STF: DeepPartial<HL7SegmentDefinition> = {
  desc: 'Staff Identification',
  fields: {
    '1': {
      opt: 'C',
    },
    '3': {
      type: 'XPN',
    },
    '4': {
      type: 'CWE',
    },
    '5': {
      type: 'CWE',
      desc: 'Administrative Sex',
    },
    '7': {
      desc: 'Active/Inactive Flag',
    },
    '8': {
      table: 184,
    },
    '9': {
      table: 69,
    },
    '10': {
      type: 'XTN',
    },
    '16': {
      desc: 'Preferred Method of Contact',
      table: 185,
    },
    '17': {
      desc: 'Marital Status',
      opt: 'O',
      table: 2,
    },
    '18': {
      type: 'ST',
      desc: 'Job Title',
      opt: 'O',
      rep: 1,
    },
    '19': {
      type: 'JCC',
      desc: 'Job Code/Class',
      opt: 'O',
      rep: 1,
    },
    '20': {
      desc: 'Employment Status Code',
      opt: 'O',
      rep: 1,
      table: 66,
    },
    '21': {
      type: 'ID',
      opt: 'O',
      rep: 1,
      len: 1,
      table: 136,
    },
    '22': {
      type: 'DLN',
      desc: "Driver's License Number - Staff",
      opt: 'O',
      rep: 1,
    },
    '23': {
      type: 'ID',
      opt: 'O',
      rep: 1,
      len: 1,
      table: 136,
    },
    '24': {
      type: 'DT',
      desc: 'Auto Ins Expires',
      opt: 'O',
      rep: 1,
    },
    '25': {
      type: 'DT',
      desc: 'Date Last DMV Review',
      opt: 'O',
      rep: 1,
    },
    '26': {
      type: 'DT',
      desc: 'Date Next DMV Review',
      opt: 'O',
      rep: 1,
    },
    '27': {
      desc: 'Race',
      opt: 'O',
      rep: 1,
      table: 5,
    },
    '28': {
      desc: 'Ethnic Group',
      opt: 'O',
      rep: 1,
      table: 189,
    },
    '29': {
      type: 'ID',
      desc: 'Re-activation Approval Indicator',
      opt: 'O',
      rep: 1,
      len: 1,
      table: 136,
    },
    '31': {
      desc: 'Date/Time of Death',
    },
    '40': {
      type: 'CWE',
      desc: 'Religion',
      opt: 'O',
      rep: 1,
      table: 6,
    },
    '41': {
      type: 'ED',
      desc: 'Signature ',
      opt: 'O',
      rep: 1,
    },
  },
};

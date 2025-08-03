import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../../interfaces/index.js';

export const STF: DeepPartial<HL7SegmentDefinition> = {
  desc: 'Staff Identification',
  fields: {
    '1': {
      opt: 'O',
      len: 250,
    },
    '3': {
      type: 'XPN',
      len: 250,
    },
    '5': {
      type: 'IS',
      desc: 'Administrative Sex',
    },
    '7': {
      desc: 'Active/Inactive Flag',
    },
    '8': {
      len: 250,
      table: 184,
    },
    '9': {
      len: 250,
      table: 69,
    },
    '10': {
      type: 'XTN',
      len: 250,
    },
    '11': {
      desc: 'Office/Home Address',
      len: 250,
    },
    '12': {
      len: 26,
    },
    '13': {
      len: 26,
    },
    '14': {
      len: 250,
    },
    '16': {
      type: 'CE',
      desc: 'Preferred Method of Contact',
      len: 250,
      table: 185,
    },
    '17': {
      desc: 'Marital Status',
      opt: 'O',
      len: 250,
      table: 2,
    },
    '18': {
      type: 'ST',
      desc: 'Job Title',
      opt: 'O',
      rep: 1,
      len: 20,
    },
    '19': {
      type: 'JCC',
      desc: 'Job Code/Class',
      opt: 'O',
      rep: 1,
      len: 20,
    },
    '20': {
      type: 'CE',
      desc: 'Employment Status Code',
      opt: 'O',
      rep: 1,
      len: 2,
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
      len: 25,
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
      desc: 'Auto Ins. Expires',
      opt: 'O',
      rep: 1,
      len: 8,
    },
    '25': {
      type: 'DT',
      desc: 'Date Last DMV Review',
      opt: 'O',
      rep: 1,
      len: 8,
    },
    '26': {
      type: 'DT',
      desc: 'Date Next DMV Review',
      opt: 'O',
      rep: 1,
      len: 8,
    },
    '27': {
      type: 'CE',
      desc: 'Race',
      opt: 'O',
      rep: 1,
      len: 250,
      table: 5,
    },
    '28': {
      type: 'CE',
      desc: 'Ethnic Group',
      opt: 'O',
      rep: 1,
      len: 250,
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
  },
};

import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../../interfaces/index.js';

export const NK1: DeepPartial<HL7SegmentDefinition> = {
  fields: {
    '1': {
      type: 'SI',
      opt: 'R',
      rep: 1,
      len: 4,
    },
    '2': {
      type: 'XPN',
      desc: 'Name',
      opt: 'O',
      rep: 'infinite',
    },
    '3': {
      opt: 'O',
      rep: 1,
      table: 63,
    },
    '4': {
      type: 'XAD',
      opt: 'O',
      rep: 'infinite',
    },
    '5': {
      type: 'XTN',
      opt: 'O',
      rep: 'infinite',
    },
    '6': {
      type: 'XTN',
      rep: 'infinite',
    },
    '7': {
      table: 131,
    },
    '11': {
      type: 'JCC',
    },
    '12': {
      type: 'CX',
    },
    '13': {
      type: 'XON',
      rep: 'infinite',
    },
    '14': {
      desc: 'Marital Status',
      opt: 'O',
      table: 2,
    },
    '15': {
      type: 'CWE',
      desc: 'Administrative Sex',
      opt: 'O',
      rep: 1,
      table: 1,
    },
    '16': {
      opt: 'O',
      rep: 1,
    },
    '17': {
      type: 'CWE',
      desc: 'Living Dependency',
      opt: 'O',
      table: 223,
    },
    '18': {
      type: 'CWE',
      desc: 'Ambulatory Status',
      opt: 'O',
      table: 9,
    },
    '19': {
      desc: 'Citizenship',
      opt: 'O',
      table: 171,
    },
    '20': {
      desc: 'Primary Language',
      opt: 'O',
      rep: 1,
      table: 296,
    },
    '21': {
      type: 'CWE',
      desc: 'Living Arrangement',
      opt: 'O',
      rep: 1,
      table: 220,
    },
    '22': {
      opt: 'O',
      rep: 1,
      table: 215,
    },
    '23': {
      type: 'ID',
      desc: 'Protection Indicator',
      opt: 'O',
      rep: 1,
      len: 1,
      table: 136,
    },
    '24': {
      type: 'CWE',
      desc: 'Student Indicator',
      opt: 'O',
      rep: 1,
      table: 231,
    },
    '25': {
      desc: 'Religion',
      opt: 'O',
      rep: 1,
      table: 6,
    },
    '26': {
      type: 'XPN',
      desc: "Mother's Maiden Name",
      opt: 'O',
    },
    '27': {
      opt: 'O',
      rep: 1,
      table: 212,
    },
    '28': {
      desc: 'Ethnic Group',
      opt: 'O',
      table: 189,
    },
    '29': {
      desc: 'Contact Reason',
      opt: 'O',
      table: 222,
    },
    '30': {
      type: 'XPN',
      desc: "Contact Person's Name",
      opt: 'O',
      rep: 'infinite',
    },
    '31': {
      type: 'XTN',
      desc: "Contact Person's Telephone Number",
      opt: 'O',
      rep: 'infinite',
    },
    '32': {
      type: 'XAD',
      desc: "Contact Person's Address",
      opt: 'O',
      rep: 'infinite',
    },
    '33': {
      type: 'CX',
      desc: "Next of Kin/Associated Party's Identifiers",
      opt: 'O',
      rep: 'infinite',
    },
    '34': {
      type: 'CWE',
      desc: 'Job Status',
      opt: 'O',
      rep: 1,
      table: 311,
    },
    '35': {
      desc: 'Race',
      opt: 'O',
      table: 5,
    },
    '36': {
      type: 'CWE',
      desc: 'Handicap',
      opt: 'O',
      rep: 1,
    },
    '37': {
      type: 'ST',
      desc: 'Contact Person Social Security Number',
      opt: 'O',
      rep: 1,
    },
    '39': {
      type: 'CWE',
    },
    '40': {
      type: 'XTN',
      desc: 'Next of Kin Telecommunication Information',
      opt: 'O',
      rep: 1,
    },
    '41': {
      type: 'XTN',
      desc: "Contact Person's Telecommunication Information",
      opt: 'O',
      rep: 1,
    },
  },
};

import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../../interfaces/index.js';

export const PV1: DeepPartial<HL7SegmentDefinition> = {
  fields: {
    '1': {
      type: 'SI',
      opt: 'O',
      rep: 1,
      len: 4,
    },
    '2': {
      type: 'CWE',
      opt: 'R',
      rep: 1,
      table: 4,
    },
    '3': {
      type: 'PL',
      rep: 1,
    },
    '4': {
      type: 'CWE',
      opt: 'O',
      rep: 1,
      table: 7,
    },
    '5': {
      type: 'CX',
      opt: 'O',
      rep: 1,
    },
    '6': {
      type: 'PL',
      opt: 'O',
      rep: 1,
    },
    '7': {
      type: 'XCN',
      opt: 'O',
      table: 10,
    },
    '8': {
      type: 'XCN',
      opt: 'O',
      table: 10,
    },
    '9': {
      type: 'XCN',
      opt: 'O',
      rep: 'infinite',
    },
    '10': {
      type: 'CWE',
      opt: 'O',
      rep: 1,
      table: 69,
    },
    '11': {
      type: 'PL',
      opt: 'O',
      rep: 1,
    },
    '12': {
      type: 'CWE',
      opt: 'O',
      rep: 1,
      table: 87,
    },
    '13': {
      type: 'CWE',
      opt: 'O',
      rep: 1,
      table: 92,
    },
    '14': {
      type: 'CWE',
      opt: 'O',
      rep: 1,
      table: 23,
    },
    '15': {
      type: 'CWE',
      opt: 'O',
      table: 9,
    },
    '16': {
      type: 'CWE',
      opt: 'O',
      rep: 1,
      table: 99,
    },
    '17': {
      type: 'XCN',
      opt: 'O',
      table: 10,
    },
    '18': {
      type: 'CWE',
      desc: 'Patient Type',
      opt: 'O',
      rep: 1,
      table: 18,
    },
    '19': {
      type: 'CX',
      opt: 'O',
      rep: 1,
    },
    '20': {
      type: 'FC',
      opt: 'O',
      rep: 'infinite',
      table: 64,
    },
    '21': {
      type: 'CWE',
      opt: 'O',
      rep: 1,
      table: 32,
    },
    '22': {
      type: 'CWE',
      opt: 'O',
      rep: 1,
      table: 45,
    },
    '23': {
      type: 'CWE',
      opt: 'O',
      rep: 1,
      table: 46,
    },
    '24': {
      type: 'CWE',
      opt: 'O',
      rep: 'infinite',
      table: 44,
    },
    '25': {
      type: 'DT',
      opt: 'O',
      rep: 'infinite',
    },
    '26': {
      type: 'NM',
      opt: 'O',
      rep: 'infinite',
    },
    '27': {
      type: 'NM',
      opt: 'O',
      rep: 'infinite',
    },
    '28': {
      type: 'CWE',
      opt: 'O',
      rep: 1,
      table: 73,
    },
    '29': {
      type: 'CWE',
      desc: 'Transfer to Bad Debt Code',
      opt: 'O',
      rep: 1,
      table: 110,
    },
    '30': {
      type: 'DT',
      desc: 'Transfer to Bad Debt Date',
      opt: 'O',
      rep: 1,
    },
    '31': {
      type: 'CWE',
      opt: 'O',
      rep: 1,
    },
    '32': {
      type: 'NM',
      opt: 'O',
      rep: 1,
    },
    '33': {
      type: 'NM',
      opt: 'O',
      rep: 1,
    },
    '34': {
      type: 'CWE',
      opt: 'O',
      rep: 1,
      table: 111,
    },
    '35': {
      type: 'DT',
      opt: 'O',
      rep: 1,
    },
    '36': {
      type: 'CWE',
      opt: 'O',
      rep: 1,
      table: 112,
    },
    '37': {
      opt: 'O',
      rep: 1,
      table: 113,
    },
    '38': {
      opt: 'O',
      rep: 1,
      table: 114,
    },
    '39': {
      type: 'CWE',
      opt: 'O',
      rep: 1,
      table: 115,
    },
    '40': {
      type: 'ST',
      opt: 'B',
      rep: 1,
    },
    '41': {
      type: 'CWE',
      opt: 'O',
      rep: 1,
      table: 117,
    },
    '42': {
      type: 'PL',
      opt: 'O',
      rep: 1,
    },
    '43': {
      type: 'PL',
      opt: 'O',
      rep: 1,
    },
    '44': {
      desc: 'Admit Date/Time',
      opt: 'O',
      rep: 1,
    },
    '45': {
      desc: 'Discharge Date/Time',
      opt: 'O',
    },
    '46': {
      type: 'NM',
      opt: 'O',
      rep: 1,
    },
    '47': {
      type: 'NM',
      opt: 'O',
      rep: 1,
    },
    '48': {
      type: 'NM',
      opt: 'O',
      rep: 1,
    },
    '49': {
      type: 'NM',
      opt: 'O',
      rep: 1,
    },
    '50': {
      type: 'CX',
      table: 203,
    },
    '51': {
      type: 'CWE',
      desc: 'Visit Indicator',
      opt: 'O',
      rep: 1,
      table: 326,
    },
    '52': {
      type: 'ST',
      desc: 'Other Healthcare Provider',
      opt: 'B',
      rep: 1,
    },
    '53': {
      type: 'ST',
      desc: 'Service Episode Description',
      opt: 'O',
      rep: 1,
    },
    '54': {
      type: 'CX',
      desc: 'Service Episode Identifier',
      opt: 'O',
      rep: 1,
    },
  },
};

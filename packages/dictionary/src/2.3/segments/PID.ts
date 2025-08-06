import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../types.js';

export const PID: DeepPartial<HL7SegmentDefinition> = {
  desc: 'Patient Identification',
  fields: {
    '1': {
      type: 'SI',
      opt: 'O',
      rep: 1,
      len: 4,
    },
    '2': {
      type: 'CX',
      opt: 'O',
      rep: 1,
      len: 16,
    },
    '3': {
      type: 'CX',
      opt: 'R',
    },
    '4': {
      type: 'CX',
      opt: 'O',
      rep: 1,
      len: 12,
    },
    '5': {
      type: 'XPN',
      opt: 'R',
      rep: 1,
      len: 48,
    },
    '6': {
      type: 'XPN',
      opt: 'O',
      rep: 1,
      len: 48,
    },
    '7': {
      opt: 'O',
      rep: 1,
    },
    '8': {
      type: 'IS',
      desc: 'Sex',
      opt: 'O',
      rep: 1,
      len: 1,
      table: 1,
    },
    '9': {
      type: 'XPN',
      opt: 'O',
      rep: 'infinite',
      len: 48,
    },
    '10': {
      type: 'IS',
      opt: 'O',
      rep: 1,
      len: 1,
      table: 5,
    },
    '11': {
      type: 'XAD',
      opt: 'O',
      rep: 'infinite',
      len: 106,
    },
    '12': {
      type: 'IS',
      desc: 'County Code',
      opt: 'O',
      rep: 1,
      len: 4,
    },
    '13': {
      type: 'XTN',
      opt: 'O',
      rep: 'infinite',
      len: 40,
    },
    '14': {
      type: 'XTN',
      opt: 'O',
      rep: 'infinite',
      len: 40,
    },
    '15': {
      type: 'CE',
      desc: 'Primary Language',
      opt: 'O',
      rep: 1,
      len: 60,
    },
    '16': {
      type: 'IS',
      opt: 'O',
      rep: 'infinite',
      len: 1,
      table: 2,
    },
    '17': {
      type: 'IS',
      desc: 'Religion',
      opt: 'O',
      rep: 1,
      len: 3,
      table: 6,
    },
    '18': {
      type: 'CX',
      opt: 'O',
      rep: 1,
      len: 20,
    },
    '19': {
      type: 'ST',
      desc: 'SSN Number - Patient',
      opt: 'O',
      rep: 1,
      len: 16,
    },
    '20': {
      type: 'DLN',
      desc: "Driver's License Number",
      opt: 'O',
      rep: 1,
      len: 25,
    },
    '21': {
      type: 'CX',
    },
    '22': {
      type: 'IS',
    },
    '23': {
      len: 60,
    },
    '24': {
      table: 136,
    },
    '26': {
      type: 'IS',
      rep: 1,
      len: 4,
    },
    '27': {
      type: 'CE',
    },
    '28': {
      type: 'CE',
      desc: 'Nationality Code',
      opt: 'O',
      rep: 1,
      len: 80,
    },
    '29': {
      type: 'TS',
      desc: 'Patient Death Date and Time',
      opt: 'O',
      rep: 1,
      len: 26,
    },
    '30': {
      type: 'ID',
      desc: 'Patient Death Indicator',
      opt: 'O',
      rep: 1,
      len: 1,
      table: 136,
    },
  },
};

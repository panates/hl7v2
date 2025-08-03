import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../../interfaces/index.js';

export const PID: DeepPartial<HL7SegmentDefinition> = {
  fields: {
    '1': {
      type: 'SI',
      opt: 'O',
      rep: 1,
      len: 4,
    },
    '2': {
      type: 'ST',
      opt: 'B',
      rep: 1,
    },
    '3': {
      type: 'CX',
      opt: 'R',
    },
    '4': {
      type: 'ST',
      opt: 'B',
      rep: 1,
    },
    '5': {
      type: 'XPN',
      opt: 'R',
    },
    '6': {
      type: 'XPN',
      desc: "Mother's Maiden Name",
      opt: 'O',
    },
    '7': {
      opt: 'O',
      rep: 1,
    },
    '8': {
      type: 'CWE',
      desc: 'Administrative Sex',
      opt: 'O',
      rep: 1,
      table: 1,
    },
    '9': {
      type: 'ST',
      opt: 'B',
      rep: 1,
    },
    '10': {
      opt: 'O',
      table: 5,
    },
    '11': {
      type: 'XAD',
      opt: 'O',
      rep: 'infinite',
    },
    '12': {
      type: 'ST',
      desc: 'County Code',
      opt: 'B',
      rep: 1,
    },
    '13': {
      type: 'XTN',
      opt: 'O',
      rep: 'infinite',
    },
    '14': {
      type: 'XTN',
      opt: 'O',
      rep: 'infinite',
    },
    '15': {
      desc: 'Primary Language',
      opt: 'O',
      rep: 1,
      table: 296,
    },
    '16': {
      opt: 'O',
      table: 2,
    },
    '17': {
      desc: 'Religion',
      opt: 'O',
      rep: 1,
      table: 6,
    },
    '18': {
      type: 'CX',
      opt: 'O',
      rep: 1,
      table: 61,
    },
    '19': {
      type: 'ST',
      desc: 'SSN Number - Patient',
      opt: 'B',
      rep: 1,
    },
    '20': {
      type: 'ST',
      opt: 'B',
      rep: 1,
    },
    '21': {
      type: 'CX',
      table: 61,
    },
    '22': {
      table: 189,
    },
    '24': {
      table: 136,
    },
    '26': {
      table: 171,
    },
    '27': {
      table: 172,
    },
    '28': {
      type: 'ST',
      desc: 'Nationality ',
      opt: 'B',
      rep: 1,
    },
    '29': {
      desc: 'Patient Death Date and Time',
      opt: 'O',
      rep: 1,
    },
    '30': {
      type: 'ID',
      desc: 'Patient Death Indicator',
      opt: 'O',
      rep: 1,
      len: 1,
      table: 136,
    },
    '31': {
      type: 'ID',
      desc: 'Identity Unknown Indicator',
      opt: 'O',
      rep: 1,
      len: 1,
      table: 136,
    },
    '32': {
      type: 'CWE',
      desc: 'Identity Reliability Code',
      opt: 'O',
      rep: 'infinite',
      table: 445,
    },
    '33': {
      desc: 'Last Update Date/Time',
      opt: 'O',
      rep: 1,
    },
    '34': {
      type: 'HD',
      desc: 'Last Update Facility',
      opt: 'O',
      rep: 1,
    },
    '35': {
      desc: 'Species Code',
      opt: 'C',
      rep: 1,
      table: 446,
    },
    '36': {
      desc: 'Breed Code',
      opt: 'C',
      rep: 1,
      table: 447,
    },
    '37': {
      type: 'ST',
      desc: 'Strain',
      opt: 'O',
      rep: 1,
    },
    '38': {
      desc: 'Production Class Code',
      opt: 'O',
      table: 429,
    },
    '40': {
      type: 'XTN',
      desc: 'Patient Telecommunication Information',
      opt: 'O',
      rep: 'infinite',
    },
  },
};

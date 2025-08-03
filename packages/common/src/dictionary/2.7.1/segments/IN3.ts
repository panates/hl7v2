import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../../interfaces/index.js';

export const IN3: DeepPartial<HL7SegmentDefinition> = {
  fields: {
    '1': {
      type: 'SI',
      desc: 'Set ID - IN3',
      opt: 'R',
      rep: 1,
      len: 4,
    },
    '2': {
      opt: 'O',
      rep: 1,
    },
    '3': {
      opt: 'O',
    },
    '4': {
      type: 'ID',
      opt: 'O',
      rep: 1,
      len: 1,
      table: 136,
    },
    '5': {
      type: 'MOP',
      desc: 'Penalty',
      opt: 'O',
      rep: 1,
    },
    '6': {
      type: 'DTM',
      opt: 'O',
      rep: 1,
    },
    '7': {
      type: 'DTM',
      opt: 'O',
      rep: 1,
    },
    '8': {
      desc: 'Operator',
      opt: 'O',
    },
    '9': {
      type: 'DT',
      opt: 'O',
      rep: 1,
    },
    '10': {
      type: 'DT',
      opt: 'O',
      rep: 1,
    },
    '11': {
      type: 'DTN',
      desc: 'Days',
      opt: 'O',
      rep: 1,
    },
    '12': {
      type: 'CWE',
      opt: 'O',
      rep: 1,
    },
    '13': {
      type: 'DTM',
      opt: 'O',
      rep: 1,
    },
    '14': {
      opt: 'O',
    },
    '15': {
      type: 'ST',
      opt: 'O',
      rep: 1,
    },
    '16': {
      opt: 'O',
    },
    '17': {
      type: 'CWE',
      opt: 'O',
      rep: 1,
    },
    '18': {
      type: 'CWE',
      opt: 'O',
      rep: 1,
    },
    '19': {
      opt: 'O',
    },
    '20': {
      type: 'ICD',
      desc: 'Pre-Certification Requirement',
      opt: 'O',
      rep: 'infinite',
    },
    '21': {
      type: 'ST',
      opt: 'O',
      rep: 1,
    },
    '22': {
      type: 'DT',
      opt: 'O',
      rep: 1,
    },
    '23': {
      opt: 'O',
      rep: 1,
      table: 151,
    },
    '24': {
      opt: 'O',
      table: 152,
    },
    '25': {
      opt: 'O',
    },
  },
};

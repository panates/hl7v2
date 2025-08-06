import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../types.js';

export const OBX: DeepPartial<HL7SegmentDefinition> = {
  desc: 'Observation/Result',
  fields: {
    '1': {
      type: 'SI',
      desc: 'Set ID - OBX',
      opt: 'O',
      rep: 1,
      len: 4,
    },
    '2': {
      type: 'ID',
      opt: 'C',
      table: 125,
    },
    '3': {
      opt: 'R',
      rep: 1,
    },
    '4': {
      opt: 'C',
      rep: 1,
    },
    '5': {
      type: 'ST',
      opt: 'C',
      rep: 'infinite',
    },
    '6': {
      desc: 'Units',
      opt: 'O',
      rep: 1,
    },
    '7': {
      type: 'ST',
      opt: 'O',
      rep: 1,
    },
    '8': {
      type: 'CWE',
      desc: 'Interpretation Codes',
      opt: 'O',
    },
    '9': {
      type: 'NM',
      desc: 'Probability',
      opt: 'O',
    },
    '10': {
      type: 'ID',
      opt: 'O',
      len: 2,
      table: 80,
    },
    '11': {
      type: 'ID',
      rep: 1,
      len: 1,
      table: 85,
    },
    '12': {
      opt: 'O',
      rep: 1,
    },
    '14': {
      desc: 'Date/Time of the Observation',
    },
    '16': {
      type: 'XCN',
    },
    '17': {
      desc: 'Observation Method',
      opt: 'O',
      rep: 'infinite',
    },
    '18': {
      type: 'EI',
      desc: 'Equipment Instance Identifier',
      opt: 'O',
      rep: 'infinite',
    },
    '19': {
      desc: 'Date/Time of the Analysis',
      opt: 'O',
      rep: 1,
    },
    '20': {
      opt: 'O',
      rep: 'infinite',
    },
    '21': {
      opt: 'O',
      rep: 1,
    },
    '22': {
      opt: 'C',
      rep: 1,
    },
    '23': {
      type: 'XON',
      desc: 'Performing Organization Name',
      opt: 'O',
      rep: 1,
    },
    '24': {
      type: 'XAD',
      desc: 'Performing Organization Address',
      opt: 'O',
      rep: 1,
    },
    '25': {
      type: 'XCN',
      desc: 'Performing Organization Medical Director',
      opt: 'O',
      rep: 1,
    },
    '26': {
      type: 'ID',
      desc: 'Patient Results Release Category',
      opt: 'O',
      rep: 1,
      len: 10,
      table: 909,
    },
  },
};

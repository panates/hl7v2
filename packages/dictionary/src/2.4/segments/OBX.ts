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
      opt: 'O',
      rep: 1,
      len: 2,
      table: 125,
    },
    '3': {
      type: 'CE',
      opt: 'R',
      rep: 1,
      len: 250,
    },
    '4': {
      desc: 'Observation Sub-Id',
      opt: 'O',
      rep: 1,
      len: 20,
    },
    '5': {
      type: 'VARIES',
      rep: 'infinite',
    },
    '6': {
      desc: 'Units',
      opt: 'O',
      rep: 1,
      len: 250,
    },
    '7': {
      type: 'ST',
      opt: 'O',
      rep: 1,
    },
    '8': {
      type: 'IS',
      opt: 'O',
      rep: 1,
      len: 5,
    },
    '9': {
      type: 'NM',
      desc: 'Probability',
      opt: 'O',
      len: 5,
    },
    '10': {
      type: 'ID',
      opt: 'O',
      rep: 1,
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
      type: 'TS',
      desc: 'Date Last Observation Normal Value',
      opt: 'O',
      rep: 1,
    },
    '14': {
      desc: 'Date/Time of the Observation',
    },
    '15': {
      len: 250,
    },
    '16': {
      type: 'XCN',
      rep: 1,
      len: 250,
    },
    '17': {
      type: 'CE',
      desc: 'Observation Method',
      opt: 'O',
      rep: 'infinite',
      len: 250,
    },
    '18': {
      type: 'EI',
      desc: 'Equipment Instance Identifier',
      opt: 'O',
      rep: 'infinite',
      len: 22,
    },
    '19': {
      type: 'TS',
      desc: 'Date/Time of the Analysis',
      opt: 'O',
      rep: 1,
      len: 26,
    },
  },
};

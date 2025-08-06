import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../types.js';

export const OBX: DeepPartial<HL7SegmentDefinition> = {
  desc: 'Observation segment',
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
      rep: 1,
      len: 2,
      table: 125,
    },
    '3': {
      type: 'CE',
      opt: 'R',
      rep: 1,
      len: 590,
    },
    '4': {
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
    },
    '7': {
      type: 'ST',
      opt: 'O',
      rep: 1,
      len: 10,
    },
    '8': {
      opt: 'O',
      rep: 5,
      len: 5,
    },
    '9': {
      type: 'NM',
      desc: 'Probability',
      opt: 'O',
      rep: 1,
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
      desc: 'Observ Result Status',
      rep: 1,
      len: 1,
      table: 85,
    },
    '12': {
      type: 'TS',
      desc: 'Date Last Obs Normal Values',
      opt: 'O',
      rep: 1,
    },
    '14': {
      desc: 'Date/Time of the Observation',
    },
    '16': {
      type: 'XCN',
      len: 80,
    },
    '17': {
      type: 'CE',
      desc: 'Observation Method',
      opt: 'O',
      rep: 'infinite',
      len: 80,
    },
  },
};

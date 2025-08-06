import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../types.js';

export const OBX: DeepPartial<HL7SegmentDefinition> = {
  fields: {
    '2': {
      desc: 'Value Type',
    },
    '3': {
      desc: 'Observation Identifier',
    },
    '4': {
      type: 'ST',
      desc: 'Observation Sub-ID',
    },
    '5': {
      desc: 'Observation Value',
      opt: 'O',
      len: 99999,
    },
    '6': {
      type: 'CE',
    },
    '7': {
      desc: 'References Range',
      len: 60,
    },
    '8': {
      desc: 'Abnormal Flags',
      rep: 'infinite',
      table: 78,
    },
    '9': {
      rep: 1,
    },
    '10': {
      desc: 'Nature of Abnormal Test',
      rep: 'infinite',
    },
    '11': {
      desc: 'Observation Result Status',
      opt: 'R',
    },
    '12': {
      desc: 'Effective Date of Reference Range',
      len: 26,
    },
    '13': {
      type: 'ST',
      desc: 'User Defined Access Checks',
      opt: 'O',
      rep: 1,
      len: 20,
    },
    '14': {
      type: 'TS',
      opt: 'O',
      rep: 1,
      len: 26,
    },
    '15': {
      type: 'CE',
      desc: "Producer's ID",
      opt: 'O',
      rep: 1,
    },
    '16': {
      desc: 'Responsible Observer',
      opt: 'O',
      rep: 'infinite',
    },
  },
};

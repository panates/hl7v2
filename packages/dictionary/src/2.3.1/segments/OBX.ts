import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../types.js';

export const OBX: DeepPartial<HL7SegmentDefinition> = {
  desc: 'Observation/result segment',
  fields: {
    '2': {
      desc: 'Value Type',
      opt: 'R',
      len: 3,
    },
    '3': {
      desc: 'Observation Identifier',
      len: 80,
    },
    '4': {
      type: 'ST',
      desc: 'Observation Sub-ID',
      opt: 'R',
    },
    '5': {
      desc: 'Observation Value',
      opt: 'O',
      len: 65536,
    },
    '6': {
      type: 'CE',
      len: 60,
    },
    '7': {
      desc: 'References Range',
      len: 60,
    },
    '8': {
      type: 'ID',
      desc: 'Abnormal Flags',
      table: 78,
    },
    '9': {
      rep: 5,
    },
    '10': {
      desc: 'Nature of Abnormal Test',
    },
    '11': {
      desc: 'Observation Result Status',
      opt: 'R',
    },
    '12': {
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
      len: 60,
    },
    '16': {
      desc: 'Responsible Observer',
      opt: 'O',
      rep: 'infinite',
    },
    '17': {
      len: 60,
    },
  },
};

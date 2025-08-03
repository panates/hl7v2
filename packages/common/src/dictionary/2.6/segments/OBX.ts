import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../../interfaces/index.js';

export const OBX: DeepPartial<HL7SegmentDefinition> = {
  fields: {
    '2': {
      desc: 'Value Type',
      rep: 1,
      len: 3,
    },
    '3': {
      type: 'CWE',
      desc: 'Observation Identifier',
      len: 705,
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
      type: 'CWE',
      len: 705,
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
      type: 'DTM',
      desc: 'Effective Date of Reference Range',
      len: 24,
    },
    '13': {
      type: 'ST',
      desc: 'User Defined Access Checks',
      opt: 'O',
      rep: 1,
      len: 20,
    },
    '14': {
      type: 'DTM',
      opt: 'O',
      rep: 1,
      len: 24,
    },
    '15': {
      type: 'CWE',
      desc: "Producer's ID",
      opt: 'O',
      rep: 1,
      len: 705,
    },
    '16': {
      desc: 'Responsible Observer',
      opt: 'O',
      rep: 'infinite',
      len: 3220,
    },
    '17': {
      type: 'CWE',
      len: 705,
    },
    '18': {
      len: 427,
    },
    '19': {
      type: 'DTM',
      len: 24,
    },
    '20': {
      type: 'CWE',
      desc: 'Observation Site',
      len: 705,
      table: 163,
    },
    '21': {
      type: 'EI',
      desc: 'Observation Instance Identifier',
      len: 427,
    },
    '22': {
      type: 'CNE',
      desc: 'Mood Code',
      len: 705,
      table: 725,
    },
    '23': {
      len: 570,
    },
    '24': {
      len: 2915,
    },
    '25': {
      len: 3220,
    },
  },
};

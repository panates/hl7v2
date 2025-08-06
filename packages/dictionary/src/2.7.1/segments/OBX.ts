import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../types.js';

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
    },
    '4': {
      type: 'ST',
      desc: 'Observation Sub-ID',
    },
    '5': {
      desc: 'Observation Value',
    },
    '6': {
      type: 'CWE',
    },
    '7': {
      desc: 'References Range',
    },
    '8': {
      rep: 'infinite',
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
    },
    '13': {
      type: 'ST',
      desc: 'User Defined Access Checks',
      opt: 'O',
      rep: 1,
    },
    '14': {
      type: 'DTM',
      opt: 'O',
      rep: 1,
    },
    '15': {
      type: 'CWE',
      desc: "Producer's ID",
      opt: 'O',
      rep: 1,
    },
    '16': {
      desc: 'Responsible Observer',
      opt: 'O',
      rep: 'infinite',
    },
    '17': {
      type: 'CWE',
    },
    '19': {
      type: 'DTM',
    },
    '20': {
      type: 'CWE',
      desc: 'Observation Site',
      table: 163,
    },
    '21': {
      type: 'EI',
      desc: 'Observation Instance Identifier',
    },
    '22': {
      type: 'CNE',
      desc: 'Mood Code',
      table: 725,
    },
  },
};

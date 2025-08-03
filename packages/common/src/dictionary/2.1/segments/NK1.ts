import { HL7SegmentDefinition } from '../../../interfaces/index.js';

export const NK1: HL7SegmentDefinition = {
  desc: 'Next of kin',
  fields: {
    '1': {
      type: 'SI',
      desc: 'Set id - next of kin',
      opt: 'R',
      rep: 1,
      len: 4,
    },
    '2': {
      type: 'PN',
      desc: 'Next of kin name',
      opt: 'O',
      rep: 1,
      len: 48,
    },
    '3': {
      type: 'ST',
      desc: 'Next of kin relationship',
      opt: 'O',
      rep: 1,
      len: 15,
    },
    '4': {
      type: 'AD',
      desc: 'Next of kin - address',
      opt: 'O',
      rep: 1,
      len: 106,
    },
    '5': {
      type: 'TN',
      desc: 'Next of kin - phone number',
      opt: 'O',
      rep: 'infinite',
      len: 40,
    },
  },
};

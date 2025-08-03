import { HL7SegmentDefinition } from '../../../interfaces/index.js';

export const DSP: HL7SegmentDefinition = {
  desc: 'Display data',
  fields: {
    '1': {
      type: 'SI',
      desc: 'Set id - display data',
      opt: 'O',
      rep: 1,
      len: 4,
    },
    '2': {
      type: 'SI',
      desc: 'Display level',
      opt: 'O',
      rep: 1,
      len: 4,
    },
    '3': {
      type: 'TX',
      desc: 'Data line',
      opt: 'R',
      rep: 1,
      len: 300,
    },
    '4': {
      type: 'ST',
      desc: 'Logical break point',
      opt: 'O',
      rep: 1,
      len: 2,
    },
    '5': {
      type: 'TX',
      desc: 'Result id',
      opt: 'O',
      rep: 1,
      len: 20,
    },
  },
};

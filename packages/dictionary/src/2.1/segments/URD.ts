import { HL7SegmentDefinition } from '../../types.js';

export const URD: HL7SegmentDefinition = {
  desc: 'Results/update definition',
  fields: {
    '1': {
      type: 'TS',
      desc: 'R/u date/time',
      opt: 'O',
      rep: 1,
      len: 19,
    },
    '2': {
      type: 'ID',
      desc: 'Report priority',
      opt: 'O',
      rep: 1,
      len: 1,
      table: 109,
    },
    '3': {
      type: 'ST',
      desc: 'R/u who subject definition',
      opt: 'R',
      rep: 'infinite',
      len: 20,
    },
    '4': {
      type: 'ID',
      desc: 'R/u what subject definition',
      opt: 'O',
      rep: 'infinite',
      len: 3,
      table: 48,
    },
    '5': {
      type: 'ST',
      desc: 'R/u what department code',
      opt: 'O',
      rep: 'infinite',
      len: 20,
    },
    '6': {
      type: 'ST',
      desc: 'R/u display/print locations',
      opt: 'O',
      rep: 'infinite',
      len: 20,
    },
    '7': {
      type: 'ID',
      desc: 'R/u results level',
      opt: 'O',
      rep: 1,
      len: 1,
      table: 108,
    },
  },
};

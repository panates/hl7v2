import { HL7SegmentDefinition } from '../../types.js';

export const URS: HL7SegmentDefinition = {
  desc: 'Unsolicited selection',
  fields: {
    '1': {
      type: 'ST',
      desc: 'R/u where subject definition',
      opt: 'R',
      rep: 'infinite',
      len: 20,
    },
    '2': {
      type: 'TS',
      desc: 'R/u when data start date/time',
      opt: 'O',
      rep: 1,
      len: 19,
    },
    '3': {
      type: 'TS',
      desc: 'R/u when data end date/time',
      opt: 'O',
      rep: 1,
      len: 19,
    },
    '4': {
      type: 'ST',
      desc: 'R/u what user qualifier',
      opt: 'O',
      rep: 'infinite',
      len: 20,
    },
    '5': {
      type: 'ST',
      desc: 'R/u other results subject defini',
      opt: 'O',
      rep: 'infinite',
      len: 20,
    },
  },
};

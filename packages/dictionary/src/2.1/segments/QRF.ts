import { HL7SegmentDefinition } from '../../types.js';

export const QRF: HL7SegmentDefinition = {
  desc: 'Query filter',
  fields: {
    '1': {
      type: 'ST',
      desc: 'Where subject filter',
      opt: 'R',
      rep: 'infinite',
      len: 20,
    },
    '2': {
      type: 'TS',
      desc: 'When data start date/time',
      opt: 'O',
      rep: 1,
      len: 19,
    },
    '3': {
      type: 'TS',
      desc: 'When data end date/time',
      opt: 'O',
      rep: 1,
      len: 19,
    },
    '4': {
      type: 'ST',
      desc: 'What user qualifier',
      opt: 'O',
      rep: 'infinite',
      len: 20,
    },
    '5': {
      type: 'ST',
      desc: 'Other qry subject filter',
      opt: 'O',
      rep: 'infinite',
      len: 20,
    },
  },
};

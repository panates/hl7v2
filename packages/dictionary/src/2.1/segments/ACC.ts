import { HL7SegmentDefinition } from '../../types.js';

export const ACC: HL7SegmentDefinition = {
  desc: 'Accident',
  fields: {
    '1': {
      type: 'TS',
      desc: 'Accident date/time',
      opt: 'O',
      rep: 1,
      len: 19,
    },
    '2': {
      type: 'ID',
      desc: 'Accident code',
      opt: 'O',
      rep: 1,
      len: 2,
      table: 50,
    },
    '3': {
      type: 'ST',
      desc: 'Accident location',
      opt: 'O',
      rep: 1,
      len: 25,
    },
  },
};

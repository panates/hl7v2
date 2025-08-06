import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../types.js';

export const EQP: DeepPartial<HL7SegmentDefinition> = {
  desc: 'Equipment/log Service',
  fields: {
    '1': {
      desc: 'Event type ',
      opt: 'R',
      rep: 1,
      table: 450,
    },
    '2': {
      type: 'ST',
      desc: 'File Name',
      opt: 'O',
      rep: 1,
    },
    '3': {
      type: 'DTM',
      desc: 'Start Date/Time',
      opt: 'R',
      rep: 1,
    },
    '4': {
      type: 'DTM',
      desc: 'End Date/Time',
      opt: 'O',
      rep: 1,
    },
    '5': {
      type: 'FT',
      desc: 'Transaction Data',
      opt: 'R',
      rep: 1,
    },
  },
};

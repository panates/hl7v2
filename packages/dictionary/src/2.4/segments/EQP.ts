import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../types.js';

export const EQP: DeepPartial<HL7SegmentDefinition> = {
  desc: 'Equipment/log Service',
  fields: {
    '1': {
      type: 'CE',
      desc: 'Event type',
      opt: 'R',
      rep: 1,
      len: 250,
      table: 450,
    },
    '2': {
      type: 'ST',
      desc: 'File Name',
      opt: 'O',
      rep: 1,
      len: 20,
    },
    '3': {
      type: 'TS',
      desc: 'Start Date/Time',
      opt: 'R',
      rep: 1,
      len: 26,
    },
    '4': {
      type: 'TS',
      desc: 'End Date/Time',
      opt: 'O',
      rep: 1,
      len: 26,
    },
    '5': {
      type: 'FT',
      desc: 'Transaction Data',
      opt: 'R',
      rep: 1,
      len: 65536,
    },
  },
};

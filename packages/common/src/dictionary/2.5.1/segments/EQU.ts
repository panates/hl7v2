import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../../interfaces/index.js';

export const EQU: DeepPartial<HL7SegmentDefinition> = {
  desc: 'Equipment Detail',
  fields: {
    '1': {
      type: 'EI',
      desc: 'Equipment Instance Identifier',
      opt: 'R',
      rep: 1,
      len: 22,
    },
    '2': {
      type: 'TS',
      desc: 'Event Date/Time',
      opt: 'R',
      rep: 1,
      len: 26,
    },
    '3': {
      type: 'CE',
      desc: 'Equipment State',
      opt: 'O',
      rep: 1,
      len: 250,
      table: 365,
    },
    '4': {
      type: 'CE',
      desc: 'Local/Remote Control State',
      opt: 'O',
      rep: 1,
      len: 250,
      table: 366,
    },
    '5': {
      type: 'CE',
      desc: 'Alert Level',
      opt: 'O',
      rep: 1,
      len: 250,
      table: 367,
    },
  },
};

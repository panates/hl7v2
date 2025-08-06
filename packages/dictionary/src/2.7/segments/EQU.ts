import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../types.js';

export const EQU: DeepPartial<HL7SegmentDefinition> = {
  desc: 'Equipment Detail',
  fields: {
    '1': {
      type: 'EI',
      desc: 'Equipment Instance Identifier',
      opt: 'R',
      rep: 1,
    },
    '2': {
      desc: 'Event Date/Time',
      opt: 'R',
      rep: 1,
    },
    '3': {
      desc: 'Equipment State',
      opt: 'C',
      rep: 1,
      table: 365,
    },
    '4': {
      desc: 'Local/Remote Control State',
      opt: 'O',
      rep: 1,
      table: 366,
    },
    '5': {
      desc: 'Alert Level',
      opt: 'O',
      rep: 1,
      table: 367,
    },
  },
};

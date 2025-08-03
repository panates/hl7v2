import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../../interfaces/index.js';

export const ODS: DeepPartial<HL7SegmentDefinition> = {
  fields: {
    '1': {
      type: 'ID',
      desc: 'Type',
      opt: 'R',
      rep: 1,
      len: 1,
      table: 159,
    },
    '2': {
      type: 'CE',
      desc: 'Service Period',
      opt: 'O',
      rep: 'infinite',
    },
    '3': {
      type: 'CE',
      desc: 'Diet, Supplement, or Preference Code',
      opt: 'R',
      rep: 'infinite',
    },
    '4': {
      type: 'ST',
      desc: 'Text Instruction',
      opt: 'O',
      rep: 'infinite',
      len: 80,
    },
  },
};

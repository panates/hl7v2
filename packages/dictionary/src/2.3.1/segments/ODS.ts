import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../types.js';

export const ODS: DeepPartial<HL7SegmentDefinition> = {
  desc: 'Dietary orders, supplements, and preferences segment',
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
      rep: 10,
      len: 60,
    },
    '3': {
      type: 'CE',
      desc: 'Diet, Supplement, or Preference Code',
      opt: 'R',
      rep: 20,
      len: 60,
    },
    '4': {
      type: 'ST',
      desc: 'Text Instruction',
      opt: 'O',
      rep: 2,
      len: 80,
    },
  },
};

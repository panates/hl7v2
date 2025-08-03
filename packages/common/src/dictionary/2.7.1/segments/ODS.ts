import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../../interfaces/index.js';

export const ODS: DeepPartial<HL7SegmentDefinition> = {
  fields: {
    '1': {
      type: 'ID',
      opt: 'R',
      rep: 1,
      len: 1,
      table: 159,
    },
    '2': {
      type: 'CWE',
      desc: 'Service Period',
      opt: 'O',
    },
    '3': {
      type: 'CWE',
      desc: 'Diet, Supplement, or Preference Code',
      opt: 'R',
    },
    '4': {
      type: 'ST',
      desc: 'Text Instruction',
      opt: 'O',
    },
  },
};

import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../types.js';

export const PTH: DeepPartial<HL7SegmentDefinition> = {
  fields: {
    '2': {
      type: 'CWE',
      len: 705,
    },
    '4': {
      type: 'DTM',
      len: 24,
    },
    '5': {
      type: 'CWE',
      desc: 'Pathway Life Cycle Status',
    },
    '6': {
      type: 'DTM',
      desc: 'Change Pathway Life Cycle Status Date/Time',
      len: 24,
    },
    '7': {
      type: 'CNE',
      desc: 'Mood Code',
      opt: 'O',
      rep: 1,
      len: 60,
      table: 725,
    },
  },
};

import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../../interfaces/index.js';

export const PTH: DeepPartial<HL7SegmentDefinition> = {
  fields: {
    '2': {
      type: 'CWE',
    },
    '4': {
      type: 'DTM',
    },
    '5': {
      type: 'CWE',
      desc: 'Pathway Life Cycle Status',
    },
    '6': {
      type: 'DTM',
      desc: 'Change Pathway Life Cycle Status Date/Time',
    },
    '7': {
      type: 'CNE',
      desc: 'Mood Code',
      rep: 1,
      table: 725,
    },
  },
};

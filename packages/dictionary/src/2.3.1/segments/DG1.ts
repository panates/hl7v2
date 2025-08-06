import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../types.js';

export const DG1: DeepPartial<HL7SegmentDefinition> = {
  desc: 'Diagnosis segment',
  fields: {
    '1': {
      desc: 'Set ID - DG1',
    },
    '3': {
      desc: 'Diagnosis Code - DG1',
    },
    '5': {
      len: 26,
    },
    '7': {
      type: 'CE',
      len: 60,
    },
    '9': {
      len: 1,
      table: 136,
    },
    '11': {
      len: 60,
    },
    '14': {
      desc: 'Grouper Version And Type',
    },
    '15': {
      type: 'ID',
      opt: 'O',
      rep: 1,
      len: 2,
      table: 359,
    },
    '16': {
      opt: 'O',
      len: 60,
    },
  },
};

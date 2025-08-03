import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../../interfaces/index.js';

export const DG1: DeepPartial<HL7SegmentDefinition> = {
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
    },
    '9': {
      len: 1,
      table: 136,
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
    },
    '20': {
      type: 'EI',
      desc: 'Diagnosis Identifier',
      opt: 'O',
      rep: 1,
      len: 427,
    },
    '21': {
      type: 'ID',
      desc: 'Diagnosis Action Code',
      opt: 'O',
      rep: 1,
      len: 1,
      table: 206,
    },
  },
};

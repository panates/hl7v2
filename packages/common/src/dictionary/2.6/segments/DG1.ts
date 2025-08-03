import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../../interfaces/index.js';

export const DG1: DeepPartial<HL7SegmentDefinition> = {
  fields: {
    '1': {
      desc: 'Set ID - DG1',
    },
    '3': {
      type: 'CWE',
      desc: 'Diagnosis Code - DG1',
    },
    '5': {
      type: 'DTM',
      len: 26,
    },
    '7': {
      type: 'CWE',
    },
    '8': {
      type: 'CWE',
    },
    '9': {
      len: 1,
      table: 136,
    },
    '11': {
      type: 'CWE',
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
    '19': {
      type: 'DTM',
      len: 24,
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
    '22': {
      type: 'EI',
      desc: 'Parent Diagnosis',
      opt: 'O',
      rep: 1,
      len: 427,
    },
    '23': {
      type: 'CWE',
      desc: 'DRG CCL Value Code',
      opt: 'O',
      rep: 1,
      len: 705,
      table: 728,
    },
    '24': {
      type: 'ID',
      desc: 'DRG Grouping Usage',
      opt: 'O',
      rep: 1,
      len: 20,
      table: 136,
    },
    '25': {
      type: 'IS',
      desc: 'DRG Diagnosis Determination Status',
      opt: 'O',
      rep: 1,
      len: 20,
      table: 731,
    },
    '26': {
      type: 'IS',
      desc: 'Present On Admission (POA) Indicator',
      opt: 'O',
      rep: 1,
      len: 1,
      table: 895,
    },
  },
};

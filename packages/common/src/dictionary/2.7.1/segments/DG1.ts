import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../../interfaces/index.js';

export const DG1: DeepPartial<HL7SegmentDefinition> = {
  fields: {
    '1': {
      desc: 'Set ID - DG1',
    },
    '3': {
      type: 'CWE',
    },
    '5': {
      type: 'DTM',
    },
    '14': {
      desc: 'Grouper Version And Type',
    },
    '15': {
      opt: 'O',
      rep: 1,
      table: 359,
    },
    '16': {
      opt: 'O',
    },
    '19': {
      type: 'DTM',
    },
    '20': {
      type: 'EI',
      desc: 'Diagnosis Identifier',
      rep: 1,
    },
    '21': {
      type: 'ID',
      desc: 'Diagnosis Action Code',
      rep: 1,
      len: 1,
      table: 206,
    },
    '22': {
      type: 'EI',
      desc: 'Parent Diagnosis',
      rep: 1,
    },
    '23': {
      type: 'CWE',
      desc: 'DRG CCL Value Code',
      opt: 'O',
      rep: 1,
      table: 728,
    },
    '24': {
      type: 'ID',
      desc: 'DRG Grouping Usage',
      opt: 'O',
      rep: 1,
      table: 136,
    },
    '25': {
      desc: 'DRG Diagnosis Determination Status',
      opt: 'O',
      rep: 1,
      table: 731,
    },
    '26': {
      desc: 'Present On Admission (POA) Indicator',
      opt: 'O',
      rep: 1,
      table: 895,
    },
  },
};

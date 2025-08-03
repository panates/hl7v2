import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../../interfaces/index.js';

export const DG1: DeepPartial<HL7SegmentDefinition> = {
  desc: 'Diagnosis',
  fields: {
    '1': {
      type: 'SI',
      opt: 'R',
      rep: 1,
      len: 4,
    },
    '2': {
      type: 'ST',
      desc: 'Diagnosis Coding Method ',
      opt: 'B',
      rep: 1,
    },
    '3': {
      desc: 'Diagnosis Code - DG1 ',
      opt: 'R',
      rep: 1,
      table: 51,
    },
    '4': {
      type: 'ST',
      desc: 'Diagnosis Description',
      opt: 'B',
      rep: 1,
    },
    '5': {
      desc: 'Diagnosis Date/Time ',
      opt: 'O',
      rep: 1,
    },
    '6': {
      type: 'CWE',
      desc: 'Diagnosis Type',
      opt: 'R',
      rep: 1,
      table: 52,
    },
    '7': {
      type: 'ST',
      desc: 'Major Diagnostic Category',
      opt: 'B',
      rep: 1,
    },
    '8': {
      type: 'ST',
      desc: 'Diagnostic Related Group ',
      opt: 'B',
      rep: 1,
    },
    '9': {
      type: 'ST',
      desc: 'DRG Approval Indicator ',
      opt: 'B',
      rep: 1,
    },
    '10': {
      type: 'ST',
      desc: 'DRG Grouper Review Code',
      opt: 'B',
      rep: 1,
    },
    '11': {
      type: 'ST',
      desc: 'Outlier Type ',
      opt: 'B',
      rep: 1,
    },
    '12': {
      type: 'ST',
      desc: 'Outlier Days ',
      opt: 'B',
      rep: 1,
    },
    '13': {
      type: 'ST',
      desc: 'Outlier Cost',
      opt: 'B',
      rep: 1,
    },
    '14': {
      type: 'ST',
      opt: 'B',
      rep: 1,
    },
    '15': {
      type: 'NM',
      desc: 'Diagnosis Priority',
    },
    '16': {
      type: 'XCN',
      desc: 'Diagnosing Clinician',
      rep: 'infinite',
    },
    '17': {
      type: 'CWE',
      desc: 'Diagnosis Classification',
      opt: 'O',
      rep: 1,
      table: 228,
    },
    '18': {
      type: 'ID',
      desc: 'Confidential Indicator',
      opt: 'O',
      rep: 1,
      len: 1,
      table: 136,
    },
    '19': {
      desc: 'Attestation Date/Time',
      opt: 'O',
      rep: 1,
    },
    '20': {
      opt: 'C',
    },
    '21': {
      opt: 'C',
    },
    '22': {
      opt: 'C',
    },
    '24': {
      len: 1,
    },
    '25': {
      type: 'CWE',
    },
    '26': {
      type: 'CWE',
    },
  },
};

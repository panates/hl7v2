import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../types.js';

export const FT1: DeepPartial<HL7SegmentDefinition> = {
  fields: {
    '3': {
      len: 10,
    },
    '4': {
      type: 'DR',
    },
    '5': {
      type: 'DTM',
    },
    '7': {
      type: 'CWE',
    },
    '13': {
      type: 'CWE',
    },
    '14': {
      type: 'CWE',
    },
    '19': {
      type: 'CWE',
      rep: 'infinite',
    },
    '20': {
      rep: 'infinite',
    },
    '21': {
      rep: 'infinite',
    },
    '22': {
      type: 'CP',
    },
    '23': {
      desc: 'Filler Order Number',
      opt: 'O',
      rep: 1,
    },
    '24': {
      rep: 'infinite',
    },
    '25': {
      type: 'CNE',
    },
    '26': {
      type: 'CNE',
      desc: 'Procedure Code Modifier',
      opt: 'O',
      rep: 'infinite',
    },
    '27': {
      type: 'CWE',
      desc: 'Advanced Beneficiary Notice Code',
      opt: 'O',
      rep: 1,
      table: 339,
    },
    '28': {
      type: 'CWE',
      opt: 'O',
      rep: 1,
      table: 476,
    },
    '29': {
      type: 'CWE',
      desc: 'NDC Code',
      opt: 'O',
      rep: 1,
      table: 549,
    },
    '30': {
      type: 'CX',
      desc: 'Payment Reference ID',
      opt: 'O',
      rep: 1,
    },
    '31': {
      type: 'SI',
      desc: 'Transaction Reference Key',
      opt: 'O',
      rep: 'infinite',
      len: 4,
    },
  },
};

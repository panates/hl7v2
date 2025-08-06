import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../types.js';

export const FT1: DeepPartial<HL7SegmentDefinition> = {
  fields: {
    '1': {
      desc: 'Set ID - FT1',
    },
    '2': {
      desc: 'Transaction ID',
    },
    '3': {
      len: 10,
    },
    '4': {
      type: 'DR',
      len: 53,
    },
    '6': {
      type: 'IS',
    },
    '7': {
      type: 'CE',
    },
    '9': {
      desc: 'Transaction Description - Alt',
    },
    '11': {
      len: 12,
    },
    '13': {
      type: 'CE',
    },
    '16': {
      desc: 'Assigned Patient Location',
      len: 80,
    },
    '17': {
      type: 'IS',
    },
    '18': {
      type: 'IS',
    },
    '19': {
      type: 'CE',
      desc: 'Diagnosis Code - FT1',
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
    '26': {
      type: 'CE',
      desc: 'Procedure Code Modifier',
      opt: 'O',
      rep: 'infinite',
    },
    '27': {
      type: 'CE',
      desc: 'Advanced Beneficiary Notice Code',
      opt: 'O',
      rep: 1,
      len: 250,
      table: 339,
    },
    '28': {
      type: 'CWE',
      desc: 'Medically Necessary Duplicate Procedure Reason.',
      opt: 'O',
      rep: 1,
      len: 250,
      table: 476,
    },
    '29': {
      type: 'CNE',
      desc: 'NDC Code',
      opt: 'O',
      rep: 1,
      len: 250,
      table: 549,
    },
    '30': {
      type: 'CX',
      desc: 'Payment Reference ID',
      opt: 'O',
      rep: 1,
      len: 250,
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

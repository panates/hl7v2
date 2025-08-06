import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../types.js';

export const FT1: DeepPartial<HL7SegmentDefinition> = {
  desc: 'Financial transaction segment',
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
      len: 60,
    },
    '14': {
      len: 60,
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
      len: 80,
    },
  },
};

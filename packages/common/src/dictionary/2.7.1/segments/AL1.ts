import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../../interfaces/index.js';

export const AL1: DeepPartial<HL7SegmentDefinition> = {
  desc: 'Patient Allergy Information',
  fields: {
    '1': {
      type: 'SI',
      opt: 'R',
      rep: 1,
      len: 4,
    },
    '2': {
      type: 'CWE',
      opt: 'O',
      rep: 1,
      table: 127,
    },
    '3': {
      type: 'CWE',
      opt: 'R',
      rep: 1,
    },
    '4': {
      type: 'CWE',
      opt: 'O',
      rep: 1,
      table: 128,
    },
    '5': {
      type: 'ST',
      opt: 'O',
      rep: 'infinite',
    },
    '6': {
      desc: 'Identification Date',
      rep: 1,
    },
  },
};

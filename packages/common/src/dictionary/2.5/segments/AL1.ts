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
      opt: 'O',
      rep: 1,
      table: 127,
    },
    '3': {
      type: 'CE',
      opt: 'R',
      rep: 1,
    },
    '4': {
      opt: 'O',
      rep: 1,
      table: 128,
    },
    '5': {
      type: 'ST',
      opt: 'O',
      rep: 'infinite',
      len: 15,
    },
    '6': {
      type: 'DT',
      desc: 'Identification Date',
      opt: 'O',
      rep: 1,
      len: 8,
    },
  },
};

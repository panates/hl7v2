import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../types.js';

export const AL1: DeepPartial<HL7SegmentDefinition> = {
  desc: 'Patient allergy information segment',
  fields: {
    '1': {
      type: 'SI',
      opt: 'R',
      rep: 1,
      len: 4,
    },
    '2': {
      type: 'IS',
      desc: 'Allergy Type',
      opt: 'O',
      rep: 1,
      len: 2,
      table: 127,
    },
    '3': {
      type: 'CE',
      desc: 'Allergy Code/Mnemonic/Description',
      opt: 'R',
      rep: 1,
      len: 60,
    },
    '4': {
      desc: 'Allergy Severity',
      opt: 'O',
      rep: 1,
      len: 2,
      table: 128,
    },
    '5': {
      type: 'ST',
      desc: 'Allergy Reaction',
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

import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../types.js';

export const AL1: DeepPartial<HL7SegmentDefinition> = {
  desc: 'Patient allergy information',
  fields: {
    '1': {
      type: 'SI',
      desc: 'Set ID - Allergy',
      opt: 'R',
      rep: 1,
      len: 4,
    },
    '2': {
      type: 'ID',
      desc: 'Allergy Type',
      opt: 'O',
      rep: 1,
      len: 2,
      table: 127,
    },
    '3': {
      type: 'CE',
      desc: 'Allergy code / mnemonic / description',
      opt: 'R',
      rep: 1,
      len: 60,
    },
    '4': {
      type: 'ID',
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
      rep: 1,
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

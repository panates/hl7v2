import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../types.js';

export const MRG: DeepPartial<HL7SegmentDefinition> = {
  desc: 'Merge Patient Information',
  fields: {
    '1': {
      desc: 'Prior Patient Identifier List',
    },
    '2': {
      desc: 'Prior Alternate Patient ID',
    },
    '3': {
      desc: 'Prior Patient Account Number',
    },
    '4': {
      desc: 'Prior Patient ID',
      opt: 'O',
      rep: 1,
    },
    '7': {
      type: 'XPN',
      rep: 'infinite',
    },
  },
};

import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../types.js';

export const MRG: DeepPartial<HL7SegmentDefinition> = {
  desc: 'Merge patient information segment-',
  fields: {
    '1': {
      desc: 'Prior Patient Identifier List',
      len: 20,
    },
    '2': {
      desc: 'Prior Alternate Patient ID',
      len: 20,
    },
    '3': {
      desc: 'Prior Patient Account Number',
    },
    '4': {
      desc: 'Prior Patient ID',
      opt: 'O',
      rep: 1,
      len: 20,
    },
    '5': {
      len: 20,
    },
    '6': {
      len: 20,
    },
    '7': {
      type: 'XPN',
      rep: 'infinite',
      len: 48,
    },
  },
};

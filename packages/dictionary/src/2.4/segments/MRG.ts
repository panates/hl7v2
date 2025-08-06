import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../types.js';

export const MRG: DeepPartial<HL7SegmentDefinition> = {
  desc: 'Merge patient information',
  fields: {
    '1': {
      type: 'CX',
      opt: 'R',
      rep: 'infinite',
      len: 250,
    },
    '2': {
      type: 'CX',
      opt: 'O',
      rep: 'infinite',
      len: 250,
    },
    '3': {
      type: 'CX',
      opt: 'O',
      rep: 1,
      len: 250,
    },
    '4': {
      type: 'CX',
      len: 250,
    },
    '5': {
      type: 'CX',
      desc: 'Prior Visit Number',
      opt: 'O',
      rep: 1,
      len: 250,
    },
    '6': {
      type: 'CX',
      desc: 'Prior Alternate Visit ID',
      opt: 'O',
      rep: 1,
      len: 250,
    },
    '7': {
      desc: 'Prior Patient Name',
      opt: 'O',
      len: 250,
    },
  },
};

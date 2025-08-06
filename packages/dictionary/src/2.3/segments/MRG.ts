import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../types.js';

export const MRG: DeepPartial<HL7SegmentDefinition> = {
  desc: 'Merge patient information',
  fields: {
    '1': {
      type: 'CX',
      opt: 'R',
      rep: 'infinite',
    },
    '2': {
      type: 'CX',
      opt: 'O',
      rep: 'infinite',
      len: 16,
    },
    '3': {
      type: 'CX',
      opt: 'O',
      rep: 1,
      len: 20,
    },
    '4': {
      type: 'CX',
    },
    '5': {
      type: 'CX',
      desc: 'Prior Visit Number',
      opt: 'O',
      rep: 1,
    },
    '6': {
      type: 'CX',
      desc: 'Prior Alternate Visit ID',
      opt: 'O',
      rep: 1,
    },
    '7': {
      type: 'CX',
      desc: 'Prior Patient Name',
      opt: 'O',
      rep: 1,
    },
  },
};

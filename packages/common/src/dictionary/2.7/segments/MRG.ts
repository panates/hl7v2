import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../../interfaces/index.js';

export const MRG: DeepPartial<HL7SegmentDefinition> = {
  fields: {
    '1': {
      type: 'CX',
      opt: 'R',
      rep: 'infinite',
      table: 61,
    },
    '2': {
      type: 'ST',
      opt: 'B',
      rep: 1,
    },
    '3': {
      type: 'CX',
      opt: 'O',
      rep: 1,
      table: 61,
    },
    '4': {
      type: 'ST',
      opt: 'B',
    },
    '5': {
      type: 'CX',
      desc: 'Prior Visit Number',
      opt: 'O',
      rep: 1,
      table: 61,
    },
    '6': {
      type: 'CX',
      desc: 'Prior Alternate Visit ID',
      opt: 'O',
      rep: 1,
      table: 61,
    },
    '7': {
      desc: 'Prior Patient Name',
      opt: 'O',
      table: 200,
    },
  },
};

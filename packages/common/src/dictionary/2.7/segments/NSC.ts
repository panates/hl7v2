import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../../interfaces/index.js';

export const NSC: DeepPartial<HL7SegmentDefinition> = {
  fields: {
    '1': {
      type: 'CWE',
      desc: 'Application Change Type',
      opt: 'R',
      rep: 1,
      table: 409,
    },
    '2': {
      type: 'ST',
      opt: 'O',
      rep: 1,
    },
    '3': {
      type: 'ST',
      opt: 'O',
      rep: 1,
    },
    '4': {
      type: 'HD',
      opt: 'O',
      rep: 1,
      table: 361,
    },
    '5': {
      type: 'HD',
      opt: 'O',
      rep: 1,
      table: 362,
    },
    '6': {
      type: 'ST',
      opt: 'O',
      rep: 1,
    },
    '7': {
      type: 'ST',
      opt: 'O',
      rep: 1,
    },
    '8': {
      type: 'HD',
      opt: 'O',
      rep: 1,
      table: 361,
    },
    '9': {
      type: 'HD',
      table: 362,
    },
  },
};

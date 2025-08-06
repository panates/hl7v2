import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../types.js';

export const NSC: DeepPartial<HL7SegmentDefinition> = {
  fields: {
    '1': {
      desc: 'Application Change Type',
      opt: 'R',
      rep: 1,
      len: 4,
      table: 409,
    },
    '2': {
      type: 'ST',
      opt: 'O',
      rep: 1,
      len: 30,
    },
    '3': {
      type: 'ST',
      opt: 'O',
      rep: 1,
      len: 30,
    },
    '4': {
      type: 'HD',
      opt: 'O',
      rep: 1,
      len: 30,
    },
    '5': {
      type: 'HD',
      opt: 'O',
      rep: 1,
      len: 30,
    },
    '6': {
      type: 'ST',
      opt: 'O',
      rep: 1,
      len: 30,
    },
    '7': {
      type: 'ST',
      opt: 'O',
      rep: 1,
      len: 30,
    },
    '8': {
      type: 'HD',
      opt: 'O',
      rep: 1,
      len: 30,
    },
    '9': {
      type: 'HD',
      len: 30,
    },
  },
};

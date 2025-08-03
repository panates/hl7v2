import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../../interfaces/index.js';

export const NSC: DeepPartial<HL7SegmentDefinition> = {
  desc: 'STATUS CHANGE',
  fields: {
    '1': {
      type: 'ID',
      opt: 'O',
      rep: 1,
      len: 4,
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
      type: 'ST',
      opt: 'O',
      rep: 1,
      len: 30,
    },
    '5': {
      type: 'ST',
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
      type: 'ST',
      opt: 'O',
      rep: 1,
      len: 30,
    },
  },
};

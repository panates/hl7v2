import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../types.js';

export const FHS: DeepPartial<HL7SegmentDefinition> = {
  desc: 'File header segment',
  fields: {
    '1': {
      type: 'ST',
      opt: 'R',
      rep: 1,
      len: 1,
    },
    '2': {
      type: 'ST',
      opt: 'R',
      rep: 1,
      len: 4,
    },
    '3': {
      type: 'ST',
      opt: 'O',
      rep: 1,
      len: 15,
    },
    '4': {
      type: 'ST',
      opt: 'O',
      rep: 1,
      len: 20,
    },
    '5': {
      type: 'ST',
      opt: 'O',
      rep: 1,
      len: 15,
    },
    '6': {
      type: 'ST',
      opt: 'O',
      rep: 1,
      len: 20,
    },
    '7': {
      type: 'TS',
      desc: 'File Creation Date/Time',
      opt: 'O',
      rep: 1,
    },
    '8': {
      type: 'ST',
      opt: 'O',
      rep: 1,
      len: 40,
    },
    '9': {
      type: 'ST',
      desc: 'File Name/ID',
      opt: 'O',
      rep: 1,
      len: 20,
    },
    '10': {
      type: 'ST',
      opt: 'O',
      rep: 1,
      len: 80,
    },
    '11': {
      type: 'ST',
      opt: 'O',
      rep: 1,
      len: 20,
    },
    '12': {
      type: 'ST',
      opt: 'O',
      rep: 1,
      len: 20,
    },
  },
};

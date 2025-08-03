import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../../interfaces/index.js';

export const DB1: DeepPartial<HL7SegmentDefinition> = {
  desc: 'Disability Segment',
  fields: {
    '1': {
      type: 'SI',
      desc: 'Set ID - DB1',
      opt: 'R',
      rep: 1,
      len: 4,
      table: 131,
    },
    '2': {
      type: 'IS',
      desc: 'Disabled person code',
      opt: 'O',
      rep: 1,
      len: 2,
    },
    '3': {
      type: 'CX',
      desc: 'Disabled person identifier',
      opt: 'O',
      rep: 'infinite',
      len: 32,
    },
    '4': {
      type: 'ID',
      desc: 'Disabled Indicator',
      opt: 'O',
      rep: 1,
      len: 1,
      table: 136,
    },
    '5': {
      type: 'DT',
      desc: 'Disability start date',
      opt: 'O',
      rep: 1,
      len: 8,
    },
    '6': {
      type: 'DT',
      desc: 'Disability end date',
      opt: 'O',
      rep: 1,
      len: 8,
    },
    '7': {
      type: 'DT',
      desc: 'Disability return to work date',
      opt: 'O',
      rep: 1,
      len: 8,
    },
    '8': {
      type: 'DT',
      desc: 'Disability unable to work date',
      opt: 'O',
      rep: 1,
      len: 8,
    },
  },
};

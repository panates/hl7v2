import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../../interfaces/index.js';

export const OM4: DeepPartial<HL7SegmentDefinition> = {
  fields: {
    '1': {
      desc: 'Sequence Number - Test/Observation Master File',
      opt: 'O',
      rep: 1,
    },
    '2': {
      opt: 'O',
      rep: 1,
    },
    '3': {
      opt: 'O',
      rep: 1,
    },
    '4': {
      opt: 'O',
      rep: 1,
    },
    '5': {
      type: 'CWE',
      opt: 'O',
      rep: 1,
    },
    '6': {
      type: 'CWE',
      opt: 'O',
      rep: 1,
    },
    '7': {
      type: 'CWE',
      opt: 'O',
      rep: 1,
    },
    '8': {
      opt: 'O',
      rep: 1,
    },
    '9': {
      type: 'TX',
      opt: 'O',
      rep: 1,
    },
    '10': {
      opt: 'O',
      rep: 1,
    },
    '11': {
      opt: 'O',
      rep: 1,
    },
    '12': {
      opt: 'O',
      rep: 1,
    },
    '13': {
      opt: 'O',
      rep: 'infinite',
    },
    '14': {
      opt: 'O',
    },
  },
};

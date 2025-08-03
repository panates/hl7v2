import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../../interfaces/index.js';

export const OM3: DeepPartial<HL7SegmentDefinition> = {
  fields: {
    '1': {
      desc: 'Sequence Number - Test/Observation Master File',
      opt: 'O',
      rep: 1,
    },
    '2': {
      type: 'CWE',
      opt: 'O',
      rep: 1,
    },
    '3': {
      type: 'CWE',
      opt: 'O',
      rep: 'infinite',
    },
    '4': {
      type: 'CWE',
      opt: 'O',
      rep: 'infinite',
    },
    '5': {
      type: 'CWE',
      opt: 'O',
      rep: 'infinite',
    },
    '6': {
      type: 'CWE',
      opt: 'O',
      rep: 'infinite',
    },
    '7': {
      opt: 'O',
      rep: 1,
      len: 3,
    },
  },
};

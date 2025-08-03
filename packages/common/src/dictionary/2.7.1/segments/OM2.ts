import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../../interfaces/index.js';

export const OM2: DeepPartial<HL7SegmentDefinition> = {
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
      opt: 'O',
    },
    '4': {
      type: 'CWE',
      opt: 'O',
      rep: 1,
    },
    '5': {
      opt: 'O',
      rep: 1,
    },
    '6': {
      type: 'RFR',
      rep: 'infinite',
    },
    '7': {
      type: 'RFR',
      opt: 'O',
      rep: 'infinite',
    },
    '8': {
      type: 'RFR',
      opt: 'O',
      rep: 1,
    },
    '9': {
      type: 'DLT',
      opt: 'O',
    },
    '10': {
      opt: 'O',
    },
  },
};

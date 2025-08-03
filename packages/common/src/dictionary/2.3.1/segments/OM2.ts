import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../../interfaces/index.js';

export const OM2: DeepPartial<HL7SegmentDefinition> = {
  desc: 'Numeric observation segment',
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
    },
    '4': {
      opt: 'O',
      rep: 1,
    },
    '5': {
      opt: 'O',
      rep: 1,
      len: 60,
    },
    '6': {
      type: 'RFR',
    },
    '7': {
      type: 'NR',
      opt: 'O',
      len: 200,
    },
    '8': {
      type: 'RFR',
      opt: 'O',
      rep: 1,
      len: 200,
    },
    '9': {
      type: 'DLT',
      opt: 'O',
      len: 200,
    },
    '10': {
      opt: 'O',
    },
  },
};

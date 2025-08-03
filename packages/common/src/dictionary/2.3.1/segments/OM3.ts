import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../../interfaces/index.js';

export const OM3: DeepPartial<HL7SegmentDefinition> = {
  desc: 'Categorical test/observation segment',
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
      desc: 'Valid Coded  Answers ',
      opt: 'O',
      rep: 1,
    },
    '4': {
      type: 'CE',
      opt: 'O',
      rep: 'infinite',
    },
    '5': {
      type: 'CE',
      opt: 'O',
      len: 200,
    },
    '6': {
      type: 'CE',
      opt: 'O',
      rep: 1,
      len: 200,
    },
    '7': {
      opt: 'O',
      rep: 1,
      len: 3,
    },
  },
};

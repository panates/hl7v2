import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../types.js';

export const RXR: DeepPartial<HL7SegmentDefinition> = {
  desc: 'Pharmacy route',
  fields: {
    '1': {
      type: 'CE',
      desc: 'Route',
      opt: 'R',
      rep: 1,
      len: 60,
    },
    '2': {
      type: 'CE',
      desc: 'Site',
      opt: 'O',
      rep: 1,
      len: 60,
    },
    '3': {
      type: 'CE',
      desc: 'Administration Device',
      opt: 'O',
      rep: 1,
      len: 60,
    },
    '4': {
      type: 'CE',
      desc: 'Administration Method',
      opt: 'O',
      rep: 1,
      len: 60,
    },
  },
};

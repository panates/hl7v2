import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../../interfaces/index.js';

export const RXR: DeepPartial<HL7SegmentDefinition> = {
  desc: 'Pharmacy/treatment route segment',
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
    '5': {
      type: 'CE',
      desc: 'Routing Instruction',
      opt: 'O',
      rep: 1,
      len: 60,
    },
  },
};

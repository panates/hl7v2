import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../types.js';

export const RXR: DeepPartial<HL7SegmentDefinition> = {
  fields: {
    '1': {
      type: 'CE',
      desc: 'Route',
      opt: 'R',
      rep: 1,
    },
    '2': {
      type: 'CWE',
      opt: 'O',
      rep: 1,
    },
    '3': {
      type: 'CE',
      desc: 'Administration Device',
      opt: 'O',
      rep: 1,
    },
    '4': {
      type: 'CWE',
      desc: 'Administration Method',
      opt: 'O',
      rep: 1,
    },
    '5': {
      type: 'CE',
      desc: 'Routing Instruction',
      opt: 'O',
      rep: 1,
    },
    '6': {
      type: 'CWE',
      desc: 'Administration Site Modifier',
      opt: 'O',
      rep: 1,
      len: 250,
      table: 495,
    },
  },
};

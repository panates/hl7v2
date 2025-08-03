import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../../interfaces/index.js';

export const ODT: DeepPartial<HL7SegmentDefinition> = {
  fields: {
    '1': {
      type: 'CE',
      desc: 'Tray Type',
      opt: 'R',
      rep: 1,
      len: 60,
    },
    '2': {
      type: 'CE',
      desc: 'Service Period',
      opt: 'O',
      rep: 10,
      len: 60,
    },
    '3': {
      type: 'ST',
      desc: 'Text Instruction',
      opt: 'O',
      len: 80,
    },
  },
};

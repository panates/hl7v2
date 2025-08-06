import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../types.js';

export const ODT: DeepPartial<HL7SegmentDefinition> = {
  fields: {
    '1': {
      type: 'CWE',
      desc: 'Tray Type',
      opt: 'R',
      rep: 1,
    },
    '2': {
      type: 'CWE',
      desc: 'Service Period',
      opt: 'O',
    },
    '3': {
      type: 'ST',
      desc: 'Text Instruction',
      opt: 'O',
    },
  },
};

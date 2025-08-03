import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../../interfaces/index.js';

export const NPU: DeepPartial<HL7SegmentDefinition> = {
  fields: {
    '1': {
      type: 'PL',
      opt: 'R',
      rep: 1,
    },
    '2': {
      type: 'CWE',
      opt: 'O',
      rep: 1,
      table: 116,
    },
  },
};

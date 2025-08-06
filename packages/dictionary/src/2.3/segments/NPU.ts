import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../types.js';

export const NPU: DeepPartial<HL7SegmentDefinition> = {
  fields: {
    '1': {
      type: 'PL',
      opt: 'R',
      rep: 1,
      len: 12,
    },
    '2': {
      type: 'IS',
      opt: 'O',
      rep: 1,
      len: 1,
      table: 116,
    },
  },
};

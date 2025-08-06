import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../types.js';

export const NPU: DeepPartial<HL7SegmentDefinition> = {
  desc: 'Bed status update',
  fields: {
    '1': {
      type: 'PL',
      opt: 'R',
      rep: 1,
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

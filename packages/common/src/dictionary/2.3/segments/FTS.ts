import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../../interfaces/index.js';

export const FTS: DeepPartial<HL7SegmentDefinition> = {
  desc: 'File trailer segment',
  fields: {
    '1': {
      opt: 'O',
      rep: 1,
      len: 10,
    },
    '2': {
      type: 'ST',
      opt: 'O',
      rep: 1,
      len: 80,
    },
  },
};

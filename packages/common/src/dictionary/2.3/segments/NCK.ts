import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../../interfaces/index.js';

export const NCK: DeepPartial<HL7SegmentDefinition> = {
  desc: 'System Clock',
  fields: {
    '1': {
      type: 'TS',
      opt: 'O',
      rep: 1,
    },
  },
};

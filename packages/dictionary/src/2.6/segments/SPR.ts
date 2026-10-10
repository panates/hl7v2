import type { DeepPartial } from 'ts-gems';
import type { HL7SegmentDefinition } from '../../types.js';

export const SPR: DeepPartial<HL7SegmentDefinition> = {
  fields: {
    '1': {
      desc: 'Query Tag',
    },
    '3': {
      desc: 'Stored Procedure Name',
    },
    '4': {
      desc: 'Input Parameter List',
    },
  },
};

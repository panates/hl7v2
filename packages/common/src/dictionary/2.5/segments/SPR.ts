import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../../interfaces/index.js';

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

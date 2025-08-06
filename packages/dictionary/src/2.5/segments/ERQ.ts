import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../types.js';

export const ERQ: DeepPartial<HL7SegmentDefinition> = {
  desc: 'Event replay query',
  fields: {
    '1': {
      desc: 'Query Tag',
    },
    '2': {
      desc: 'Event Identifier',
    },
    '3': {
      desc: 'Input Parameter List',
    },
  },
};

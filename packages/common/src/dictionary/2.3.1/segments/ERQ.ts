import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../../interfaces/index.js';

export const ERQ: DeepPartial<HL7SegmentDefinition> = {
  desc: 'Event replay query segment',
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

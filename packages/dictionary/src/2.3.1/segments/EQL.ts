import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../types.js';

export const EQL: DeepPartial<HL7SegmentDefinition> = {
  desc: 'Embedded query language segment',
  fields: {
    '1': {
      desc: 'Query Tag',
    },
    '3': {
      desc: 'EQL  Query Name',
    },
    '4': {
      desc: 'EQL  Query Statement',
    },
  },
};

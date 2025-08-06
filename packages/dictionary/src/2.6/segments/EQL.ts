import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../types.js';

export const EQL: DeepPartial<HL7SegmentDefinition> = {
  fields: {
    '1': {
      desc: 'Query Tag',
    },
  },
};

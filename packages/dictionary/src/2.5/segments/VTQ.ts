import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../types.js';

export const VTQ: DeepPartial<HL7SegmentDefinition> = {
  fields: {
    '1': {
      desc: 'Query Tag',
    },
  },
};

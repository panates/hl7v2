import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../types.js';

export const VTQ: DeepPartial<HL7SegmentDefinition> = {
  desc: 'Virtual table query request segment',
  fields: {
    '1': {
      desc: 'Query Tag',
    },
  },
};

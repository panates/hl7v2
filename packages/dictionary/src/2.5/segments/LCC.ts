import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../types.js';

export const LCC: DeepPartial<HL7SegmentDefinition> = {
  fields: {
    '1': {
      desc: 'Primary Key Value - LCC',
    },
  },
};

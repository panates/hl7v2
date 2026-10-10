import type { DeepPartial } from 'ts-gems';
import type { HL7SegmentDefinition } from '../../types.js';

export const LCC: DeepPartial<HL7SegmentDefinition> = {
  desc: 'Location charge code segment',
  fields: {
    '1': {
      desc: 'Primary Key Value - LCC',
    },
  },
};

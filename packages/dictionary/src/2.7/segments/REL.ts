import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../types.js';

export const REL: DeepPartial<HL7SegmentDefinition> = {
  desc: 'Clinical Relationship Segment',
  fields: {
    '1': {
      desc: 'Set ID -REL',
      opt: 'C',
    },
    '15': {
      desc: 'Priority  Sequence No (rel preference for consideration)',
    },
  },
};

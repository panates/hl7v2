import type { DeepPartial } from 'ts-gems';
import type { HL7SegmentDefinition } from '../../types.js';

export const ORG: DeepPartial<HL7SegmentDefinition> = {
  fields: {
    '1': {
      desc: 'Set ID _ ORG',
    },
    '3': {
      desc: 'Organization Unit Type Code',
    },
    '10': {
      len: 250,
    },
  },
};

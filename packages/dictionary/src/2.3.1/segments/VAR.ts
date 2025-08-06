import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../types.js';

export const VAR: DeepPartial<HL7SegmentDefinition> = {
  fields: {
    '4': {
      rep: 'infinite',
      len: 80,
    },
  },
};

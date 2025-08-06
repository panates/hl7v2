import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../types.js';

export const PES: DeepPartial<HL7SegmentDefinition> = {
  fields: {
    '1': {
      rep: 'infinite',
    },
    '5': {
      len: 75,
    },
    '11': {
      rep: 'infinite',
    },
  },
};

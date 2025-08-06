import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../types.js';

export const ERR: DeepPartial<HL7SegmentDefinition> = {
  desc: 'Error',
  fields: {
    '1': {
      rep: 'infinite',
    },
  },
};

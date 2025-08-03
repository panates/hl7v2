import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../../interfaces/index.js';

export const CDM: DeepPartial<HL7SegmentDefinition> = {
  fields: {
    '1': {
      desc: 'Primary Key Value - CDM',
    },
    '7': {
      rep: 'infinite',
    },
    '11': {
      type: 'CX',
    },
    '12': {
      rep: 'infinite',
    },
  },
};

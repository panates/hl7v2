import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../../interfaces/index.js';

export const CDM: DeepPartial<HL7SegmentDefinition> = {
  desc: 'Charge description master segment',
  fields: {
    '1': {
      desc: 'Primary Key Value - CDM',
    },
    '7': {
      rep: 'infinite',
      len: 80,
    },
    '12': {
      rep: 'infinite',
    },
  },
};

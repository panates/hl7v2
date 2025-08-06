import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../types.js';

export const ROL: DeepPartial<HL7SegmentDefinition> = {
  fields: {
    '3': {
      desc: 'Role-ROL',
      opt: 'R',
      len: 80,
    },
    '4': {
      rep: 'infinite',
    },
    '8': {
      desc: 'Role Action Reason',
    },
  },
};

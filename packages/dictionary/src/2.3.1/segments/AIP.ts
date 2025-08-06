import { DeepPartial } from 'ts-gems';
import { HL7SegmentDefinition } from '../../types.js';

export const AIP: DeepPartial<HL7SegmentDefinition> = {
  desc: 'Appointment information - personnel resource segment',
  fields: {
    '2': {
      len: 3,
    },
    '3': {
      rep: 'infinite',
    },
    '5': {
      rep: 1,
    },
  },
};

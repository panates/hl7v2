import { HL7MessageDefinition } from '../../types.js';

export const PMU_B03: HL7MessageDefinition = {
  desc: 'Delete personnel re cord',
  segments: {
    MSH: {
      idx: 0,
      min: 1,
      max: 1,
      desc: 'Message header',
    },
    EVN: {
      idx: 1,
      min: 1,
      max: 1,
      desc: 'Event type',
    },
    STF: {
      idx: 2,
      min: 1,
      max: 1,
      desc: 'Staff identification',
    },
  },
};

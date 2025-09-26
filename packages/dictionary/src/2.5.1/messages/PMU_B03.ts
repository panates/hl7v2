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
    SFT: {
      idx: 1,
      desc: 'Software segment',
    },
    EVN: {
      idx: 2,
      min: 1,
      max: 1,
      desc: 'Event type',
    },
    STF: {
      idx: 3,
      min: 1,
      max: 1,
      desc: 'Staff identification',
    },
  },
};

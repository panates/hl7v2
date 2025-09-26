import { HL7MessageDefinition } from '../../types.js';

export const DFT_P03: HL7MessageDefinition = {
  desc: 'Post detail financial transaction',
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
    PID: {
      idx: 2,
      min: 1,
      max: 1,
      desc: 'Patient identification',
    },
    PV1: {
      idx: 3,
      max: 1,
      desc: 'Patient visit',
    },
    FT1: {
      idx: 4,
      desc: 'Financial transaction',
    },
  },
};

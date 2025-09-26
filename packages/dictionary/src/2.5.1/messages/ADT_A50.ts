import { HL7MessageDefinition } from '../../types.js';

export const ADT_A50: HL7MessageDefinition = {
  desc: 'Change visit number',
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
    PID: {
      idx: 3,
      min: 1,
      max: 1,
      desc: 'Patient identification',
    },
    PD1: {
      idx: 4,
      max: 1,
      desc: 'Patient additional demographic',
    },
    MRG: {
      idx: 5,
      min: 1,
      max: 1,
      desc: 'Merge patient information',
    },
    PV1: {
      idx: 6,
      min: 1,
      max: 1,
      desc: 'Patient visit',
    },
  },
};

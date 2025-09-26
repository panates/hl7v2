import { HL7MessageDefinition } from '../../types.js';

export const ADT_A37: HL7MessageDefinition = {
  desc: 'Unlink patient information',
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
      idx: 7,
      min: 1,
      max: 1,
      desc: 'Patient identification',
    },
    PD1: {
      idx: 8,
      max: 1,
      desc: 'Patient additional demographic',
    },
    PV1: {
      idx: 9,
      max: 1,
      desc: 'Patient visit',
    },
    DB1: {
      idx: 10,
      desc: 'Disability',
    },
  },
};

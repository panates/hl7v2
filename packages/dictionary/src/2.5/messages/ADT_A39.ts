import { HL7MessageDefinition } from '../../types.js';

export const ADT_A39: HL7MessageDefinition = {
  desc: 'Merge person - patient id',
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
    PATIENT: {
      idx: 3,
      min: 1,
      desc: 'Patient',
      segments: {
        PID: {
          idx: 0,
          min: 1,
          max: 1,
          desc: 'Patient identification',
        },
        PD1: {
          idx: 1,
          max: 1,
          desc: 'Patient additional demographic',
        },
        MRG: {
          idx: 2,
          min: 1,
          max: 1,
          desc: 'Merge patient information',
        },
        PV1: {
          idx: 3,
          max: 1,
          desc: 'Patient visit',
        },
      },
    },
  },
};

import { HL7MessageDefinition } from '../../types.js';

export const ADT_A43: HL7MessageDefinition = {
  desc: 'Move patient information - patient identifier list',
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
      },
    },
  },
};

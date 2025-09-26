import { HL7MessageDefinition } from '../../types.js';

export const ADT_A44: HL7MessageDefinition = {
  desc: 'Move account information - patient account number',
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
    PATIENT_ID: {
      idx: 2,
      min: 1,
      desc: 'Patient id',
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

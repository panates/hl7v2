import { HL7MessageDefinition } from '../../types.js';

export const ADT_A41: HL7MessageDefinition = {
  desc: 'Merge account - patient account number',
  segments: {
    MSH: {
      idx: 0,
      min: 1,
      max: 1,
      desc: 'Message header segment',
    },
    EVN: {
      idx: 1,
      min: 1,
      max: 1,
      desc: 'Event type',
    },
    PATIENT: {
      idx: 2,
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
          desc: 'Patient demographic',
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

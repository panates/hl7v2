import { HL7MessageDefinition } from '../../types.js';

export const ADT_A41: HL7MessageDefinition = {
  desc: 'Merge account - patient account number',
  segments: {
    MSH: {
      idx: 0,
      min: 1,
      max: 1,
      desc: 'MSH - message header segment',
    },
    EVN: {
      idx: 1,
      min: 1,
      max: 1,
      desc: 'EVN - event type segment',
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
          desc: 'PID - patient identification segment',
        },
        PD1: {
          idx: 1,
          max: 1,
          desc: 'Patient Additional Demographic',
        },
        MRG: {
          idx: 2,
          min: 1,
          max: 1,
          desc: 'MRG - merge patient information segment-',
        },
        PV1: {
          idx: 3,
          max: 1,
          desc: 'PV1 - patient visit segment-',
        },
      },
    },
  },
};

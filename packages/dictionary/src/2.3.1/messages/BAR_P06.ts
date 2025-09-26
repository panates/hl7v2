import { HL7MessageDefinition } from '../../types.js';

export const BAR_P06: HL7MessageDefinition = {
  desc: 'End account',
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
        PV1: {
          idx: 1,
          max: 1,
          desc: 'PV1 - patient visit segment-',
        },
      },
    },
  },
};

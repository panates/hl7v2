import { HL7MessageDefinition } from '../../types.js';

export const ADT_A02: HL7MessageDefinition = {
  desc: 'Transfer a patient',
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
      min: 1,
      max: 1,
      desc: 'Patient visit',
    },
  },
};

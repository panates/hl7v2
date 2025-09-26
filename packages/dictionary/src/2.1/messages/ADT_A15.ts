import { HL7MessageDefinition } from '../../types.js';

export const ADT_A15: HL7MessageDefinition = {
  desc: 'Pending transfer',
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
    DG1: {
      idx: 4,
      max: 1,
      desc: 'Diagnosis',
    },
  },
};

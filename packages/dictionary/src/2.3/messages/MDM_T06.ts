import { HL7MessageDefinition } from '../../types.js';

export const MDM_T06: HL7MessageDefinition = {
  desc: 'Document addendum notification and content',
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
    TXA: {
      idx: 4,
      min: 1,
      max: 1,
      desc: 'Document notification segment',
    },
    OBX: {
      idx: 5,
      min: 1,
      desc: 'Observation segment',
    },
  },
};

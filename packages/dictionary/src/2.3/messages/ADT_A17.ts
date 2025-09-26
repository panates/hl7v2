import { HL7MessageDefinition } from '../../types.js';

export const ADT_A17: HL7MessageDefinition = {
  desc: 'Swap patients',
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
      idx: 8,
      min: 1,
      max: 1,
      desc: 'Patient identification',
    },
    PD1: {
      idx: 9,
      max: 1,
      desc: 'Patient demographic',
    },
    PV1: {
      idx: 10,
      min: 1,
      max: 1,
      desc: 'Patient visit',
    },
    PV2: {
      idx: 11,
      max: 1,
      desc: 'Patient visit - additional information',
    },
    DB1: {
      idx: 12,
      desc: 'Disability segment',
    },
    OBX: {
      idx: 13,
      desc: 'Observation segment',
    },
  },
};

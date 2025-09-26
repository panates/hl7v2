import { HL7MessageDefinition } from '../../types.js';

export const ADT_A17: HL7MessageDefinition = {
  desc: 'Swap patients',
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
    PID: {
      idx: 9,
      min: 1,
      max: 1,
      desc: 'Patient identification',
    },
    PD1: {
      idx: 10,
      max: 1,
      desc: 'Patient additional demographic',
    },
    PV1: {
      idx: 11,
      min: 1,
      max: 1,
      desc: 'Patient visit',
    },
    PV2: {
      idx: 12,
      max: 1,
      desc: 'Patient visit - additional information',
    },
    DB1: {
      idx: 13,
      desc: 'Disability',
    },
    OBX: {
      idx: 14,
      desc: 'Observation/result',
    },
  },
};

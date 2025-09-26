import { HL7MessageDefinition } from '../../types.js';

export const ADT_A38: HL7MessageDefinition = {
  desc: 'Cancel pre-admit',
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
      idx: 3,
      min: 1,
      max: 1,
      desc: 'Patient identification',
    },
    PD1: {
      idx: 4,
      max: 1,
      desc: 'Patient additional demographic',
    },
    PV1: {
      idx: 5,
      min: 1,
      max: 1,
      desc: 'Patient visit',
    },
    PV2: {
      idx: 6,
      max: 1,
      desc: 'Patient visit - additional information',
    },
    DB1: {
      idx: 7,
      desc: 'Disability',
    },
    OBX: {
      idx: 8,
      desc: 'Observation/result',
    },
    DG1: {
      idx: 9,
      desc: 'Diagnosis',
    },
    DRG: {
      idx: 10,
      max: 1,
      desc: 'Diagnosis related group',
    },
  },
};

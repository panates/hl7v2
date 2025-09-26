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
    PD1: {
      idx: 3,
      max: 1,
      desc: 'Patient additional demographic',
    },
    PV1: {
      idx: 4,
      min: 1,
      max: 1,
      desc: 'Patient visit',
    },
    PV2: {
      idx: 5,
      max: 1,
      desc: 'Patient visit - additional information',
    },
    DB1: {
      idx: 6,
      desc: 'Disability',
    },
    OBX: {
      idx: 7,
      desc: 'Observation/result',
    },
    DG1: {
      idx: 8,
      desc: 'Diagnosis',
    },
    DRG: {
      idx: 9,
      max: 1,
      desc: 'Diagnosis related group',
    },
  },
};

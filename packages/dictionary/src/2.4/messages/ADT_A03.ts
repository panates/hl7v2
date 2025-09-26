import { HL7MessageDefinition } from '../../types.js';

export const ADT_A03: HL7MessageDefinition = {
  desc: 'Discharge/end visit',
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
    ROL: {
      idx: 7,
      desc: 'Role',
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
      idx: 8,
      desc: 'Disability',
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
    PROCEDURE: {
      idx: 11,
      desc: 'Procedure',
      segments: {
        PR1: {
          idx: 0,
          min: 1,
          max: 1,
          desc: 'Procedures',
        },
        ROL: {
          idx: 1,
          desc: 'Role',
        },
      },
    },
    OBX: {
      idx: 12,
      desc: 'Observation/result',
    },
    PDA: {
      idx: 13,
      max: 1,
      desc: 'Patient death and autopsy',
    },
  },
};

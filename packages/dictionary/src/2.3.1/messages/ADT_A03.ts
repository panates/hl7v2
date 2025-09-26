import { HL7MessageDefinition } from '../../types.js';

export const ADT_A03: HL7MessageDefinition = {
  desc: 'Discharge/end visit',
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
    PID: {
      idx: 2,
      min: 1,
      max: 1,
      desc: 'PID - patient identification segment',
    },
    PD1: {
      idx: 3,
      max: 1,
      desc: 'Patient Additional Demographic',
    },
    PV1: {
      idx: 4,
      min: 1,
      max: 1,
      desc: 'PV1 - patient visit segment-',
    },
    PV2: {
      idx: 5,
      max: 1,
      desc: 'PV2 - patient visit - additional information segment',
    },
    DB1: {
      idx: 6,
      desc: 'DB1 - Disability segment',
    },
    DG1: {
      idx: 7,
      desc: 'DG1 - diagnosis segment',
    },
    DRG: {
      idx: 8,
      max: 1,
      desc: 'DRG - diagnosis related group segment',
    },
    PROCEDURE: {
      idx: 9,
      desc: 'Procedure',
      segments: {
        PR1: {
          idx: 0,
          min: 1,
          max: 1,
          desc: 'PR1 - procedures segment',
        },
        ROL: {
          idx: 1,
          desc: 'Role',
        },
      },
    },
    OBX: {
      idx: 10,
      desc: 'OBX - observation/result segment',
    },
  },
};

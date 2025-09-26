import { HL7MessageDefinition } from '../../types.js';

export const ADT_A11: HL7MessageDefinition = {
  desc: 'Cancel admit/visit notification',
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
    OBX: {
      idx: 7,
      desc: 'OBX - observation/result segment',
    },
    DG1: {
      idx: 8,
      desc: 'DG1 - diagnosis segment',
    },
  },
};

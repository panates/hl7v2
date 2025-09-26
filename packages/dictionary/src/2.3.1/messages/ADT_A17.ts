import { HL7MessageDefinition } from '../../types.js';

export const ADT_A17: HL7MessageDefinition = {
  desc: 'Swap patients',
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
      idx: 8,
      min: 1,
      max: 1,
      desc: 'PID - patient identification segment',
    },
    PD1: {
      idx: 9,
      max: 1,
      desc: 'Patient Additional Demographic',
    },
    PV1: {
      idx: 10,
      min: 1,
      max: 1,
      desc: 'PV1 - patient visit segment-',
    },
    PV2: {
      idx: 11,
      max: 1,
      desc: 'PV2 - patient visit - additional information segment',
    },
    DB1: {
      idx: 12,
      desc: 'DB1 - Disability segment',
    },
    OBX: {
      idx: 13,
      desc: 'OBX - observation/result segment',
    },
  },
};

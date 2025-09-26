import { HL7MessageDefinition } from '../../types.js';

export const ADT_A61: HL7MessageDefinition = {
  desc: 'Change consulting doctor',
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
    ROL: {
      idx: 5,
      desc: 'Role',
    },
    PV2: {
      idx: 6,
      max: 1,
      desc: 'PV2 - patient visit - additional information segment',
    },
  },
};

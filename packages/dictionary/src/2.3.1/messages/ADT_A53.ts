import { HL7MessageDefinition } from '../../types.js';

export const ADT_A53: HL7MessageDefinition = {
  desc: 'Cancel patient returns from a leave of absence',
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
  },
};

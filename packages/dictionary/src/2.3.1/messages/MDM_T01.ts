import { HL7MessageDefinition } from '../../types.js';

export const MDM_T01: HL7MessageDefinition = {
  desc: 'Original document notification',
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
    PV1: {
      idx: 3,
      min: 1,
      max: 1,
      desc: 'PV1 - patient visit segment-',
    },
    TXA: {
      idx: 4,
      min: 1,
      max: 1,
      desc: 'Document notification segment',
    },
  },
};

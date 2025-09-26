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
    EVN: {
      idx: 1,
      min: 1,
      max: 1,
      desc: 'Event type',
    },
    PID: {
      idx: 6,
      min: 1,
      max: 1,
      desc: 'Patient identification',
    },
    PV1: {
      idx: 7,
      min: 1,
      max: 1,
      desc: 'Patient visit',
    },
    PV2: {
      idx: 8,
      max: 1,
      desc: 'Patient visit - additional information',
    },
    OBX: {
      idx: 9,
      desc: 'Observation result',
    },
  },
};

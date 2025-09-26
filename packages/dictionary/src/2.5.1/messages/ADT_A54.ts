import { HL7MessageDefinition } from '../../types.js';

export const ADT_A54: HL7MessageDefinition = {
  desc: 'Change attending doctor',
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
    ROL: {
      idx: 8,
      desc: 'Role',
    },
    PV1: {
      idx: 6,
      min: 1,
      max: 1,
      desc: 'Patient visit',
    },
    PV2: {
      idx: 7,
      max: 1,
      desc: 'Patient visit - additional information',
    },
  },
};

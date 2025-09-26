import { HL7MessageDefinition } from '../../types.js';

export const ADT_A61: HL7MessageDefinition = {
  desc: 'Change consulting doctor',
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
    PV1: {
      idx: 5,
      min: 1,
      max: 1,
      desc: 'Patient visit',
    },
    ROL: {
      idx: 6,
      desc: 'Role',
    },
    PV2: {
      idx: 7,
      max: 1,
      desc: 'Patient visit - additional information',
    },
  },
};

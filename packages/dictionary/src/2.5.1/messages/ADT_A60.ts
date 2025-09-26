import { HL7MessageDefinition } from '../../types.js';

export const ADT_A60: HL7MessageDefinition = {
  desc: 'Update allergy information',
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
    PV1: {
      idx: 4,
      max: 1,
      desc: 'Patient visit',
    },
    PV2: {
      idx: 5,
      max: 1,
      desc: 'Patient visit - additional information',
    },
    IAM: {
      idx: 6,
      desc: 'Patient adverse reaction information',
    },
  },
};

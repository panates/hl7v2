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
    EVN: {
      idx: 1,
      min: 1,
      max: 1,
      desc: 'Event type',
    },
    PID: {
      idx: 2,
      min: 1,
      max: 1,
      desc: 'Patient identification',
    },
    PV1: {
      idx: 3,
      max: 1,
      desc: 'Patient visit',
    },
    PV2: {
      idx: 4,
      max: 1,
      desc: 'Patient visit - additional information',
    },
    IAM: {
      idx: 5,
      desc: 'Patient adverse reaction information - unique iden',
    },
  },
};

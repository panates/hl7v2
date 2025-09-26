import { HL7MessageDefinition } from '../../types.js';

export const ADT_A60: HL7MessageDefinition = {
  desc: 'Update allergy information',
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
      max: 1,
      desc: 'PV1 - patient visit segment-',
    },
    PV2: {
      idx: 4,
      max: 1,
      desc: 'PV2 - patient visit - additional information segment',
    },
    IAM: {
      idx: 5,
      desc: 'Patient adverse reaction information - unique iden',
    },
  },
};

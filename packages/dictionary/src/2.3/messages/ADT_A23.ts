import { HL7MessageDefinition } from '../../types.js';

export const ADT_A23: HL7MessageDefinition = {
  desc: 'Delete a patient record',
  segments: {
    MSH: {
      idx: 0,
      min: 1,
      max: 1,
      desc: 'Message header segment',
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
    PD1: {
      idx: 3,
      max: 1,
      desc: 'Patient demographic',
    },
    PV1: {
      idx: 4,
      min: 1,
      max: 1,
      desc: 'Patient visit',
    },
    PV2: {
      idx: 5,
      max: 1,
      desc: 'Patient visit - additional information',
    },
    DB1: {
      idx: 6,
      desc: 'Disability segment',
    },
    OBX: {
      idx: 7,
      desc: 'Observation segment',
    },
  },
};

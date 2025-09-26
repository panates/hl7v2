import { HL7MessageDefinition } from '../../types.js';

export const ADT_A02: HL7MessageDefinition = {
  desc: 'Transfer a patient',
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
    PD1: {
      idx: 3,
      max: 1,
      desc: 'Patient additional demographic',
    },
    ROL: {
      idx: 7,
      desc: 'Role',
    },
    PV1: {
      idx: 5,
      min: 1,
      max: 1,
      desc: 'Patient visit',
    },
    PV2: {
      idx: 6,
      max: 1,
      desc: 'Patient visit - additional information',
    },
    DB1: {
      idx: 8,
      desc: 'Disability',
    },
    OBX: {
      idx: 9,
      desc: 'Observation/result',
    },
    PDA: {
      idx: 10,
      max: 1,
      desc: 'Patient death and autopsy',
    },
  },
};

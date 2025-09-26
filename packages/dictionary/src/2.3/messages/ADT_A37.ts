import { HL7MessageDefinition } from '../../types.js';

export const ADT_A37: HL7MessageDefinition = {
  desc: 'Unlink patient information',
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
      idx: 6,
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
      idx: 7,
      max: 1,
      desc: 'Patient visit',
    },
    DB1: {
      idx: 8,
      desc: 'Disability segment',
    },
  },
};

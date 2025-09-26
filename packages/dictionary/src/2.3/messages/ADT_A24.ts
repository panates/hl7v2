import { HL7MessageDefinition } from '../../types.js';

export const ADT_A24: HL7MessageDefinition = {
  desc: 'Link patient information',
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
      idx: 7,
      max: 1,
      desc: 'Patient demographic',
    },
    PV1: {
      idx: 8,
      max: 1,
      desc: 'Patient visit',
    },
    DB1: {
      idx: 9,
      desc: 'Disability segment',
    },
  },
};

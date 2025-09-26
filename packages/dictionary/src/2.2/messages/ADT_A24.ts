import { HL7MessageDefinition } from '../../types.js';

export const ADT_A24: HL7MessageDefinition = {
  desc: 'Link patient information',
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
      idx: 4,
      min: 1,
      max: 1,
      desc: 'Patient identification',
    },
    PV1: {
      idx: 5,
      max: 1,
      desc: 'Patient visit',
    },
  },
};

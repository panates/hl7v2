import { HL7MessageDefinition } from '../../types.js';

export const ADT_A48: HL7MessageDefinition = {
  desc: 'Change alternate patient id',
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
    MRG: {
      idx: 4,
      min: 1,
      max: 1,
      desc: 'Merge patient information',
    },
  },
};

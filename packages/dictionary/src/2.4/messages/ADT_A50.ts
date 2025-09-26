import { HL7MessageDefinition } from '../../types.js';

export const ADT_A50: HL7MessageDefinition = {
  desc: 'Change visit number',
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
    PV1: {
      idx: 5,
      min: 1,
      max: 1,
      desc: 'Patient visit',
    },
  },
};

import { HL7MessageDefinition } from '../../types.js';

export const ADT_A24: HL7MessageDefinition = {
  desc: 'Link patient information',
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
      idx: 6,
      min: 1,
      max: 1,
      desc: 'PID - patient identification segment',
    },
    PD1: {
      idx: 7,
      max: 1,
      desc: 'Patient Additional Demographic',
    },
    PV1: {
      idx: 8,
      max: 1,
      desc: 'PV1 - patient visit segment-',
    },
    DB1: {
      idx: 9,
      desc: 'DB1 - Disability segment',
    },
  },
};

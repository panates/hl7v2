import { HL7MessageDefinition } from '../../types.js';

export const PMU_B04: HL7MessageDefinition = {
  desc: 'Active practicing person',
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
    STF: {
      idx: 2,
      min: 1,
      max: 1,
      desc: 'Staff identification',
    },
    PRA: {
      idx: 3,
      desc: 'Practitioner detail',
    },
    ORG: {
      idx: 4,
      max: 1,
      desc: 'Practitioner organization unit',
    },
  },
};

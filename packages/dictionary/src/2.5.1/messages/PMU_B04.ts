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
    SFT: {
      idx: 1,
      desc: 'Software segment',
    },
    EVN: {
      idx: 2,
      min: 1,
      max: 1,
      desc: 'Event type',
    },
    STF: {
      idx: 3,
      min: 1,
      max: 1,
      desc: 'Staff identification',
    },
    PRA: {
      idx: 4,
      desc: 'Practitioner detail',
    },
    ORG: {
      idx: 5,
      desc: 'Practitioner organization unit',
    },
  },
};

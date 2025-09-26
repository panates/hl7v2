import { HL7MessageDefinition } from '../../types.js';

export const PMU_B06: HL7MessageDefinition = {
  desc: 'Terminate Practicing Person Message',
  segments: {
    MSH: {
      idx: 0,
      min: 1,
      max: 1,
      desc: 'Message Header',
    },
    SFT: {
      idx: 1,
      desc: 'Software',
    },
    UAC: {
      idx: 2,
      max: 1,
      desc: 'User Authentication Credential',
    },
    EVN: {
      idx: 3,
      min: 1,
      max: 1,
      desc: 'Event Type',
    },
    STF: {
      idx: 4,
      min: 1,
      max: 1,
      desc: 'Staff',
    },
    PRA: {
      idx: 5,
      desc: 'Practitioner',
    },
    ORG: {
      idx: 6,
      desc: 'Organization',
    },
  },
};

import { HL7MessageDefinition } from '../../types.js';

export const PMU_B07: HL7MessageDefinition = {
  desc: 'Grant Certificate Message',
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
      max: 1,
      desc: 'Practitioner',
    },
    CERTIFICATE: {
      idx: 6,
      desc: 'Certificate',
      segments: {
        CER: {
          idx: 0,
          min: 1,
          max: 1,
          desc: 'Certificate',
        },
        ROL: {
          idx: 1,
          desc: 'Role',
        },
      },
    },
  },
};

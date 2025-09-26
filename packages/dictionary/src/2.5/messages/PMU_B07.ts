import { HL7MessageDefinition } from '../../types.js';

export const PMU_B07: HL7MessageDefinition = {
  desc: 'Add personnel record',
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
      max: 1,
      desc: 'Practitioner detail',
    },
    CERTIFICATE: {
      idx: 5,
      desc: 'Certificate',
      segments: {
        CER: {
          idx: 0,
          min: 1,
          max: 1,
          desc: 'Certificate detail',
        },
        ROL: {
          idx: 1,
          desc: 'Role',
        },
      },
    },
  },
};

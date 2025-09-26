import { HL7MessageDefinition } from '../../types.js';

export const SMD_S32: HL7MessageDefinition = {
  desc: 'Anti-Microbial Device Cycle Data Request',
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
      desc: 'User Authentication Credential Segment',
    },
    'SDD,SCD': {
      idx: 3,
      desc: 'Anti-microbial Device Cycle Data',
    },
  },
};

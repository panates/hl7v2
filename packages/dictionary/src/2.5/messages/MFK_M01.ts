import { HL7MessageDefinition } from '../../types.js';

export const MFK_M01: HL7MessageDefinition = {
  desc: 'Master file application acknowledgment',
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
    MSA: {
      idx: 2,
      min: 1,
      max: 1,
      desc: 'Message acknowledgment',
    },
    ERR: {
      idx: 3,
      desc: 'Error',
    },
    MFI: {
      idx: 4,
      min: 1,
      max: 1,
      desc: 'Master file identification',
    },
    MFA: {
      idx: 5,
      desc: 'Master file acknowledgment',
    },
  },
};

import { HL7MessageDefinition } from '../../types.js';

export const MFK_M04: HL7MessageDefinition = {
  desc: 'Master File Application Acknowledgment',
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
    MSA: {
      idx: 3,
      min: 1,
      max: 1,
      desc: 'Acknowledgment',
    },
    ERR: {
      idx: 4,
      desc: 'Error',
    },
    MFI: {
      idx: 5,
      min: 1,
      max: 1,
      desc: 'Master File Identification',
    },
    MFA: {
      idx: 6,
      desc: 'Master File ACK segment',
    },
  },
};

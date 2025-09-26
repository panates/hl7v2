import { HL7MessageDefinition } from '../../types.js';

export const MFK_M01: HL7MessageDefinition = {
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
    MSA: {
      idx: 2,
      min: 1,
      max: 1,
      desc: 'Acknowledgment',
    },
    ERR: {
      idx: 3,
      desc: 'Error',
    },
    MFI: {
      idx: 4,
      min: 1,
      max: 1,
      desc: 'Master File Identification',
    },
    MFA: {
      idx: 5,
      desc: 'Master File ACK segment',
    },
  },
};

import { HL7MessageDefinition } from '../../types.js';

export const MFK_M01: HL7MessageDefinition = {
  desc: 'Master file application acknowledgment',
  segments: {
    MSH: {
      idx: 0,
      min: 1,
      max: 1,
      desc: 'Message header segment',
    },
    MSA: {
      idx: 1,
      min: 1,
      max: 1,
      desc: 'Message acknowledgement segment',
    },
    MFI: {
      idx: 5,
      min: 1,
      max: 1,
      desc: 'Master file identification segment',
    },
    ERR: {
      idx: 3,
      max: 1,
      desc: 'Error segment',
    },
    MFA: {
      idx: 4,
      desc: 'Master file acknowledgement segment',
    },
    MF: {
      idx: 6,
      min: 1,
      desc: 'Mf',
      segments: {
        MFA: {
          idx: 0,
          max: 1,
          desc: 'Master file acknowledgement segment',
        },
      },
    },
  },
};

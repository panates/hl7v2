import { HL7MessageDefinition } from '../../types.js';

export const MFK_M03: HL7MessageDefinition = {
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
    ERR: {
      idx: 2,
      max: 1,
      desc: 'Error segment',
    },
    MFI: {
      idx: 3,
      min: 1,
      max: 1,
      desc: 'Master file identification segment',
    },
    MFA: {
      idx: 4,
      desc: 'Master file acknowledgement segment',
    },
  },
};

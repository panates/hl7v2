import { HL7MessageDefinition } from '../../types.js';

export const MFK_M05: HL7MessageDefinition = {
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
      idx: 2,
      min: 1,
      max: 1,
      desc: 'Master file identification segment',
    },
    MFA: {
      idx: 3,
      desc: 'Master file acknowledgement segment',
    },
  },
};

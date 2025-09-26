import { HL7MessageDefinition } from '../../types.js';

export const MFK_M05: HL7MessageDefinition = {
  desc: 'Master file application acknowledgment',
  segments: {
    MSH: {
      idx: 0,
      min: 1,
      max: 1,
      desc: 'MSH - message header segment',
    },
    MSA: {
      idx: 1,
      min: 1,
      max: 1,
      desc: 'MSA - message acknowledgment segment',
    },
    MFI: {
      idx: 2,
      min: 1,
      max: 1,
      desc: 'MFI - master file identification segment',
    },
    MFA: {
      idx: 3,
      desc: 'MFA - master file acknowledgment segment',
    },
  },
};

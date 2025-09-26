import { HL7MessageDefinition } from '../../types.js';

export const MFD_M02: HL7MessageDefinition = {
  desc: 'Master files delayed application acknowledgment',
  segments: {
    MSH: {
      idx: 0,
      min: 1,
      max: 1,
      desc: 'Message header',
    },
    MFI: {
      idx: 1,
      min: 1,
      max: 1,
      desc: 'Master file identification',
    },
    MFA: {
      idx: 2,
      desc: 'Master file acknowledgement',
    },
  },
};

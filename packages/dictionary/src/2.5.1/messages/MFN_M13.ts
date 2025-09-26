import { HL7MessageDefinition } from '../../types.js';

export const MFN_M13: HL7MessageDefinition = {
  desc: 'Master files notification',
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
    MFI: {
      idx: 2,
      min: 1,
      max: 1,
      desc: 'Master file identification',
    },
    MFE: {
      idx: 3,
      min: 1,
      desc: 'Master file entry',
    },
  },
};

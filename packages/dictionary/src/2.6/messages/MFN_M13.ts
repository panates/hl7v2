import { HL7MessageDefinition } from '../../types.js';

export const MFN_M13: HL7MessageDefinition = {
  desc: 'Master File Notification - General',
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
    MFI: {
      idx: 3,
      min: 1,
      max: 1,
      desc: 'Master File Identification',
    },
    MFE: {
      idx: 4,
      min: 1,
      desc: 'Master File Entry',
    },
  },
};

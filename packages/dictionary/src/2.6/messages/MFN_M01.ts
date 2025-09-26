import { HL7MessageDefinition } from '../../types.js';

export const MFN_M01: HL7MessageDefinition = {
  desc: 'Master File Notification',
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
    MFI: {
      idx: 2,
      min: 1,
      max: 1,
      desc: 'Master File Identification',
    },
    MF: {
      idx: 3,
      min: 1,
      desc: 'Mf',
      segments: {
        MFE: {
          idx: 0,
          min: 1,
          max: 1,
          desc: 'Master File Entry',
        },
      },
    },
  },
};

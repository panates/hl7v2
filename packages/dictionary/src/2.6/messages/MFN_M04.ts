import { HL7MessageDefinition } from '../../types.js';

export const MFN_M04: HL7MessageDefinition = {
  desc: 'Master files charge description',
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
    MF_CDM: {
      idx: 4,
      min: 1,
      desc: 'Mf cdm',
      segments: {
        MFE: {
          idx: 0,
          min: 1,
          max: 1,
          desc: 'Master File Entry',
        },
        CDM: {
          idx: 1,
          min: 1,
          max: 1,
          desc: 'Charge Description Master',
        },
        PRC: {
          idx: 2,
          desc: 'Price Segment',
        },
      },
    },
  },
};

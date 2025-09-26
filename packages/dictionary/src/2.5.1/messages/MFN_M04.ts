import { HL7MessageDefinition } from '../../types.js';

export const MFN_M04: HL7MessageDefinition = {
  desc: 'Master files charge description',
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
    MF_CDM: {
      idx: 3,
      min: 1,
      desc: 'Mf cdm',
      segments: {
        MFE: {
          idx: 0,
          min: 1,
          max: 1,
          desc: 'Master file entry',
        },
        CDM: {
          idx: 1,
          min: 1,
          max: 1,
          desc: 'Charge description master',
        },
        PRC: {
          idx: 2,
          desc: 'Pricing',
        },
      },
    },
  },
};

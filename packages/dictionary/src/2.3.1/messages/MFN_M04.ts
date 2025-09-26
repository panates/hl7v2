import { HL7MessageDefinition } from '../../types.js';

export const MFN_M04: HL7MessageDefinition = {
  desc: 'Master files charge description',
  segments: {
    MSH: {
      idx: 0,
      min: 1,
      max: 1,
      desc: 'MSH - message header segment',
    },
    MFI: {
      idx: 1,
      min: 1,
      max: 1,
      desc: 'MFI - master file identification segment',
    },
    MF_CDM: {
      idx: 2,
      min: 1,
      desc: 'Mf cdm',
      segments: {
        MFE: {
          idx: 0,
          min: 1,
          max: 1,
          desc: 'MFE - master file entry segment',
        },
        CDM: {
          idx: 1,
          min: 1,
          max: 1,
          desc: 'CDM -  charge description master segment',
        },
        PRC: {
          idx: 2,
          desc: 'PRC -  pricing segment',
        },
      },
    },
  },
};

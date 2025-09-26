import { HL7MessageDefinition } from '../../types.js';

export const MFN_M04: HL7MessageDefinition = {
  desc: 'Master files charge description',
  segments: {
    MSH: {
      idx: 0,
      min: 1,
      max: 1,
      desc: 'Message header segment',
    },
    MFI: {
      idx: 1,
      min: 1,
      max: 1,
      desc: 'Master file identification segment',
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
          desc: 'Master file entry segment',
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

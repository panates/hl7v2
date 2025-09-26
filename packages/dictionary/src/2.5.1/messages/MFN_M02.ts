import { HL7MessageDefinition } from '../../types.js';

export const MFN_M02: HL7MessageDefinition = {
  desc: 'Master file - staff practitioner',
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
    MF_STAFF: {
      idx: 3,
      min: 1,
      desc: 'Mf staff',
      segments: {
        MFE: {
          idx: 0,
          min: 1,
          max: 1,
          desc: 'Master file entry',
        },
        STF: {
          idx: 1,
          min: 1,
          max: 1,
          desc: 'Staff identification',
        },
        PRA: {
          idx: 2,
          desc: 'Practitioner detail',
        },
        ORG: {
          idx: 3,
          desc: 'Practitioner organization unit',
        },
        AFF: {
          idx: 4,
          desc: 'Professional affiliation',
        },
        LAN: {
          idx: 5,
          desc: 'Language detail',
        },
        EDU: {
          idx: 6,
          desc: 'Educational detail',
        },
        CER: {
          idx: 7,
          desc: 'Certificate detail',
        },
        NTE: {
          idx: 8,
          desc: 'Notes and comments',
        },
      },
    },
  },
};

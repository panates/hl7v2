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
    MFI: {
      idx: 1,
      min: 1,
      max: 1,
      desc: 'Master file identification',
    },
    MF_STAFF: {
      idx: 2,
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
          max: 1,
          desc: 'Practitioner detail',
        },
        ORG: {
          idx: 3,
          max: 1,
          desc: 'Practitioner organization unit',
        },
      },
    },
  },
};

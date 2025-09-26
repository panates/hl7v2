import { HL7MessageDefinition } from '../../types.js';

export const MFN_M02: HL7MessageDefinition = {
  desc: 'Master file - staff practitioner',
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
    MF_STAFF: {
      idx: 2,
      min: 1,
      desc: 'Mf staff',
      segments: {
        MFE: {
          idx: 0,
          min: 1,
          max: 1,
          desc: 'Master file entry segment',
        },
        STF: {
          idx: 1,
          min: 1,
          max: 1,
          desc: 'Staff identification segment',
        },
        PRA: {
          idx: 2,
          max: 1,
          desc: 'Practitioner detail segment',
        },
      },
    },
  },
};

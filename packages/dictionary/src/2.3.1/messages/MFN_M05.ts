import { HL7MessageDefinition } from '../../types.js';

export const MFN_M05: HL7MessageDefinition = {
  desc: 'Patient location master file',
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
    MF_LOCATION: {
      idx: 2,
      min: 1,
      desc: 'Mf location',
      segments: {
        MFE: {
          idx: 0,
          min: 1,
          max: 1,
          desc: 'MFE - master file entry segment',
        },
        LOC: {
          idx: 1,
          min: 1,
          max: 1,
          desc: 'LOC - location identification segment',
        },
        LCH: {
          idx: 2,
          desc: 'LCH - location characteristic segment',
        },
        LRL: {
          idx: 3,
          desc: 'LRL - location relationship segment',
        },
        MF_LOC_DEPT: {
          idx: 4,
          min: 1,
          desc: 'Mf loc dept',
          segments: {
            LDP: {
              idx: 0,
              min: 1,
              max: 1,
              desc: 'LDP - location department segment',
            },
            LCH: {
              idx: 1,
              desc: 'LCH - location characteristic segment',
            },
            LCC: {
              idx: 2,
              desc: 'LCC - location charge code segment',
            },
          },
        },
      },
    },
  },
};

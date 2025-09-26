import { HL7MessageDefinition } from '../../types.js';

export const MFN_M05: HL7MessageDefinition = {
  desc: 'Patient location master file',
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
    MF_LOCATION: {
      idx: 2,
      min: 1,
      desc: 'Mf location',
      segments: {
        MFE: {
          idx: 0,
          min: 1,
          max: 1,
          desc: 'Master file entry segment',
        },
        LOC: {
          idx: 1,
          min: 1,
          max: 1,
          desc: 'Location identification',
        },
        LCH: {
          idx: 2,
          desc: 'Location characteristic',
        },
        LRL: {
          idx: 3,
          desc: 'Location relationship',
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
              desc: 'Location department',
            },
            LCH: {
              idx: 1,
              desc: 'Location characteristic',
            },
            LCC: {
              idx: 2,
              desc: 'Location charge code',
            },
          },
        },
      },
    },
  },
};

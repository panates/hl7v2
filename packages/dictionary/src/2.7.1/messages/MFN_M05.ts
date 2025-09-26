import { HL7MessageDefinition } from '../../types.js';

export const MFN_M05: HL7MessageDefinition = {
  desc: 'Master File Notification - Patient Location',
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
    MF_LOCATION: {
      idx: 4,
      min: 1,
      desc: 'Mf Location',
      segments: {
        MFE: {
          idx: 0,
          min: 1,
          max: 1,
          desc: 'Master File Entry',
        },
        LOC: {
          idx: 1,
          min: 1,
          max: 1,
          desc: 'Patient Location Master',
        },
        LCH: {
          idx: 2,
          desc: 'Location Characteristic',
        },
        LRL: {
          idx: 3,
          desc: 'Location Relationship',
        },
        MF_LOC_DEPT: {
          idx: 4,
          min: 1,
          desc: 'Mf Loc Dept',
          segments: {
            LDP: {
              idx: 0,
              min: 1,
              max: 1,
              desc: 'Location Department',
            },
            LCH: {
              idx: 1,
              desc: 'Location Characteristic',
            },
            LCC: {
              idx: 2,
              desc: 'Location Charge Code',
            },
          },
        },
      },
    },
  },
};

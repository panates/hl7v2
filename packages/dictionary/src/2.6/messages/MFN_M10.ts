import { HL7MessageDefinition } from '../../types.js';

export const MFN_M10: HL7MessageDefinition = {
  desc: 'Test/observation batteries master file',
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
    MF_TEST_BATTERIES: {
      idx: 4,
      min: 1,
      desc: 'Mf test batteries',
      segments: {
        MFE: {
          idx: 0,
          min: 1,
          max: 1,
          desc: 'Master File Entry',
        },
        OM1: {
          idx: 1,
          min: 1,
          max: 1,
          desc: 'General Segment (Fields That Apply to Most Observations)',
        },
        MF_TEST_BATT_DETAIL: {
          idx: 2,
          max: 1,
          desc: 'Mf test batt detail',
          segments: {
            OM5: {
              idx: 0,
              min: 1,
              max: 1,
              desc: 'Observation Batteries',
            },
            OM4: {
              idx: 1,
              desc: 'Observations that Require Specimens',
            },
          },
        },
      },
    },
  },
};

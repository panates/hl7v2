import { HL7MessageDefinition } from '../../types.js';

export const MFN_M09: HL7MessageDefinition = {
  desc: 'Test/observation (categorical) master file',
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
    MF_TEST_CATEGORICAL: {
      idx: 4,
      min: 1,
      desc: 'Mf test categorical',
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
        MF_TEST_CAT_DETAIL: {
          idx: 2,
          max: 1,
          desc: 'Mf test cat detail',
          segments: {
            OM3: {
              idx: 0,
              min: 1,
              max: 1,
              desc: 'Categorical Service/Test/Observation Segment',
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

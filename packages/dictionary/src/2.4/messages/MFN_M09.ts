import { HL7MessageDefinition } from '../../types.js';

export const MFN_M09: HL7MessageDefinition = {
  desc: 'Test/observation (categorical) master file',
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
    MF_TEST_CATEGORICAL: {
      idx: 2,
      min: 1,
      desc: 'Mf test categorical',
      segments: {
        MFE: {
          idx: 0,
          min: 1,
          max: 1,
          desc: 'Master file entry',
        },
        OM1: {
          idx: 1,
          min: 1,
          max: 1,
          desc: 'General segment',
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
              desc: 'Categorical service/test/observation',
            },
            OM4: {
              idx: 1,
              desc: 'Observations that require specimens',
            },
          },
        },
      },
    },
  },
};

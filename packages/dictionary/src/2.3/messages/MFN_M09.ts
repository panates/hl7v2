import { HL7MessageDefinition } from '../../types.js';

export const MFN_M09: HL7MessageDefinition = {
  desc: 'Test/observation (categorical) master file',
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
    MF_TEST_CATEGORICAL: {
      idx: 2,
      min: 1,
      desc: 'Mf test categorical',
      segments: {
        MFE: {
          idx: 0,
          min: 1,
          max: 1,
          desc: 'Master file entry segment',
        },
        MF_TEST_CAT_DETAIL: {
          idx: 1,
          max: 1,
          desc: 'Mf test cat detail',
          segments: {
            OM3: {
              idx: 0,
              min: 1,
              max: 1,
              desc: 'Categorical test/observation',
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

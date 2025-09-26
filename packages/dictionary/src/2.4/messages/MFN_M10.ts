import { HL7MessageDefinition } from '../../types.js';

export const MFN_M10: HL7MessageDefinition = {
  desc: 'Test/observation batteries master file',
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
    MF_TEST_BATTERIES: {
      idx: 2,
      min: 1,
      desc: 'Mf test batteries',
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
        MF_TEST_BATT_DETAIL: {
          idx: 2,
          max: 1,
          desc: 'Mf test batt detail',
          segments: {
            OM5: {
              idx: 0,
              min: 1,
              max: 1,
              desc: 'Observation batteries (sets',
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

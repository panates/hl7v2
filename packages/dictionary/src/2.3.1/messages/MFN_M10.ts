import { HL7MessageDefinition } from '../../types.js';

export const MFN_M10: HL7MessageDefinition = {
  desc: 'Test/observation batteries master file',
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
    MF_TEST_BATTERIES: {
      idx: 2,
      min: 1,
      desc: 'Mf test batteries',
      segments: {
        MFE: {
          idx: 0,
          min: 1,
          max: 1,
          desc: 'MFE - master file entry segment',
        },
        OM1: {
          idx: 1,
          min: 1,
          max: 1,
          desc: 'OM1 - general segment (fields that apply to most observations',
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
              desc: 'OM5 - observation batteries (sets',
            },
            OM4: {
              idx: 1,
              desc: 'OM4 - observations that require specimens segment',
            },
          },
        },
      },
    },
  },
};

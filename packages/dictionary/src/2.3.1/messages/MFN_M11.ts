import { HL7MessageDefinition } from '../../types.js';

export const MFN_M11: HL7MessageDefinition = {
  desc: 'Test/calculated observations master file',
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
    MF_TEST_CALCULATED: {
      idx: 2,
      min: 1,
      desc: 'Mf test calculated',
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
        MF_TEST_CALC_DETAIL: {
          idx: 2,
          max: 1,
          desc: 'Mf test calc detail',
          segments: {
            OM6: {
              idx: 0,
              min: 1,
              max: 1,
              desc: 'OM6 - Observations that are calculated from other observations segment',
            },
            OM2: {
              idx: 1,
              min: 1,
              max: 1,
              desc: 'OM2 - numeric observation segment',
            },
          },
        },
      },
    },
  },
};

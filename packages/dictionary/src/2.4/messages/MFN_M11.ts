import { HL7MessageDefinition } from '../../types.js';

export const MFN_M11: HL7MessageDefinition = {
  desc: 'Test/calculated observations master file',
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
    MF_TEST_CALCULATED: {
      idx: 2,
      min: 1,
      desc: 'Mf test calculated',
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
        MF_TEST_CALC_DETAIL: {
          idx: 2,
          max: 1,
          desc: 'Mf test calc detail',
          segments: {
            OM6: {
              idx: 0,
              min: 1,
              max: 1,
              desc: 'Observations that are calculated from other observ',
            },
            OM2: {
              idx: 1,
              min: 1,
              max: 1,
              desc: 'Numeric observation',
            },
          },
        },
      },
    },
  },
};

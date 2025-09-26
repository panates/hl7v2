import { HL7MessageDefinition } from '../../types.js';

export const MFN_M08: HL7MessageDefinition = {
  desc: 'Test/observation (numeric) master file',
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
    MF_TEST_NUMERIC: {
      idx: 2,
      min: 1,
      desc: 'Mf test numeric',
      segments: {
        MFE: {
          idx: 0,
          min: 1,
          max: 1,
          desc: 'Master file entry segment',
        },
        OM1: {
          idx: 1,
          min: 1,
          max: 1,
          desc: 'General - fields that apply to most observations',
        },
        XX: {
          idx: 2,
          max: 1,
          desc: 'Xx',
          segments: {
            OM2: {
              idx: 0,
              max: 1,
              desc: 'Numeric observation',
            },
            OM3: {
              idx: 1,
              max: 1,
              desc: 'Categorical test/observation',
            },
            OM4: {
              idx: 2,
              max: 1,
              desc: 'Observations that require specimens',
            },
          },
        },
      },
    },
  },
};

import { HL7MessageDefinition } from '../../types.js';

export const MFN_M08: HL7MessageDefinition = {
  desc: 'Test/observation (numeric) master file',
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
    MF_TEST_NUMERIC: {
      idx: 2,
      min: 1,
      desc: 'Mf test numeric',
      segments: {
        MFE: {
          idx: 0,
          min: 1,
          max: 1,
          desc: 'MFE - master file entry segment',
        },
        OM1: {
          idx: 1,
          max: 1,
          desc: 'OM1 - general segment (fields that apply to most observations',
        },
        MF_NUMERIC_OBSERVATION: {
          idx: 2,
          max: 1,
          desc: 'Mf numeric observation',
          segments: {
            OM2: {
              idx: 0,
              max: 1,
              desc: 'OM2 - numeric observation segment',
            },
            OM3: {
              idx: 1,
              max: 1,
              desc: 'OM3 - categorical test/observation segment',
            },
            OM4: {
              idx: 2,
              max: 1,
              desc: 'OM4 - observations that require specimens segment',
            },
          },
        },
      },
    },
  },
};

import { HL7MessageDefinition } from '../../types.js';

export const MFN_M10: HL7MessageDefinition = {
  desc: 'Test/observation batteries master file',
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
    MF_TEST_BATTERIES: {
      idx: 2,
      desc: 'Mf test batteries',
      segments: {
        OM5: {
          idx: 0,
          min: 1,
          max: 1,
          desc: 'Observation batteries',
        },
        OM4: {
          idx: 1,
          desc: 'Observations that require specimens',
        },
      },
    },
  },
};

import { HL7MessageDefinition } from '../../types.js';

export const MFN_M08: HL7MessageDefinition = {
  desc: 'Master File Notification - Test/Observation (Numeric)',
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
    MF_TEST_NUMERIC: {
      idx: 4,
      min: 1,
      desc: 'Mf Test Numeric',
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
        OM2: {
          idx: 2,
          max: 1,
          desc: 'Numeric Observation Segment',
        },
        OM3: {
          idx: 3,
          max: 1,
          desc: 'Categorical Service/Test/Observation Segment',
        },
        OM4: {
          idx: 4,
          max: 1,
          desc: 'Observations that Require Specimens',
        },
      },
    },
  },
};

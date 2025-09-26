import { HL7MessageDefinition } from '../../types.js';

export const MFN_M11: HL7MessageDefinition = {
  desc: 'Master File Notification - Test/Calculated Observations',
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
    MF_TEST_CALCULATED: {
      idx: 4,
      min: 1,
      desc: 'Mf Test Calculated',
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
        MF_TEST_CALC_DETAIL: {
          idx: 2,
          max: 1,
          desc: 'Mf Test Calc Detail',
          segments: {
            OM6: {
              idx: 0,
              min: 1,
              max: 1,
              desc: 'Observations Calculated from Other Observations',
            },
            OM2: {
              idx: 1,
              min: 1,
              max: 1,
              desc: 'Numeric Observation Segment',
            },
          },
        },
      },
    },
  },
};

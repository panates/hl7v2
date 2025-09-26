import { HL7MessageDefinition } from '../../types.js';

export const MFN_M03: HL7MessageDefinition = {
  desc: 'Master File Notification - Test/Observation',
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
    MFI: {
      idx: 2,
      min: 1,
      max: 1,
      desc: 'Master File Identification',
    },
    MF_TEST: {
      idx: 3,
      min: 1,
      desc: 'Mf test',
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
      },
    },
  },
};

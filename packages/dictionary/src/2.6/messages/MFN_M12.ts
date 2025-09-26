import { HL7MessageDefinition } from '../../types.js';

export const MFN_M12: HL7MessageDefinition = {
  desc: 'Master file notification message',
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
    MF_OBS_ATTRIBUTES: {
      idx: 4,
      min: 1,
      desc: 'Mf obs attributes',
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
        OM7: {
          idx: 2,
          max: 1,
          desc: 'Other Basic Observation/Service Attributes',
        },
      },
    },
  },
};

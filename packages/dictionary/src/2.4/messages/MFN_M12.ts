import { HL7MessageDefinition } from '../../types.js';

export const MFN_M12: HL7MessageDefinition = {
  desc: 'Master file notification message',
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
    MF_OBS_ATTRIBUTES: {
      idx: 2,
      min: 1,
      desc: 'Mf obs attributes',
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
        OM7: {
          idx: 2,
          max: 1,
          desc: 'Additional basic attributes',
        },
      },
    },
  },
};

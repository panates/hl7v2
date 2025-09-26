import { HL7MessageDefinition } from '../../types.js';

export const MFN_M15: HL7MessageDefinition = {
  desc: 'Master files notification',
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
    MF_INV_ITEM: {
      idx: 4,
      min: 1,
      desc: 'Mf inv item',
      segments: {
        MFE: {
          idx: 0,
          min: 1,
          max: 1,
          desc: 'Master File Entry',
        },
        IIM: {
          idx: 1,
          min: 1,
          max: 1,
          desc: 'Inventory Item Master',
        },
      },
    },
  },
};

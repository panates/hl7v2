import { HL7MessageDefinition } from '../../types.js';

export const MFN_M02: HL7MessageDefinition = {
  desc: 'Master file - staff practitioner',
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
    MF_STAFF: {
      idx: 4,
      min: 1,
      desc: 'Mf staff',
      segments: {
        MFE: {
          idx: 0,
          min: 1,
          max: 1,
          desc: 'Master File Entry',
        },
        STF: {
          idx: 1,
          min: 1,
          max: 1,
          desc: 'Staff Identification',
        },
        PRA: {
          idx: 2,
          desc: 'Practitioner Detail',
        },
        ORG: {
          idx: 3,
          desc: 'Practitioner Organization Unit Segment',
        },
        AFF: {
          idx: 4,
          desc: 'Professional Affiliation',
        },
        LAN: {
          idx: 5,
          desc: 'Language Detail',
        },
        EDU: {
          idx: 6,
          desc: 'Educational Detail',
        },
        CER: {
          idx: 7,
          desc: 'Certificate Detail',
        },
        NTE: {
          idx: 8,
          desc: 'Notes and Comments for the STF',
        },
      },
    },
  },
};

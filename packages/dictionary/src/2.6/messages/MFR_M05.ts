import { HL7MessageDefinition } from '../../types.js';

export const MFR_M05: HL7MessageDefinition = {
  desc: 'Master files response',
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
    MSA: {
      idx: 3,
      min: 1,
      max: 1,
      desc: 'Acknowledgment',
    },
    ERR: {
      idx: 4,
      desc: 'Error',
    },
    QAK: {
      idx: 5,
      max: 1,
      desc: 'Query Acknowledgment',
    },
    QRD: {
      idx: 6,
      min: 1,
      max: 1,
      desc: 'Query Definition',
    },
    QRF: {
      idx: 7,
      max: 1,
      desc: 'Query Filter',
    },
    MFI: {
      idx: 8,
      min: 1,
      max: 1,
      desc: 'Master File Name',
    },
    MF_QUERY: {
      idx: 9,
      min: 1,
      desc: 'Mf query',
      segments: {
        MFE: {
          idx: 0,
          min: 1,
          max: 1,
          desc: 'Master File Entry',
        },
        LOC: {
          idx: 1,
          min: 1,
          max: 1,
          desc: 'Patient Location Master',
        },
        LCH: {
          idx: 2,
          desc: 'Location Characteristic',
        },
        LRL: {
          idx: 3,
          desc: 'Location Relationship',
        },
        MF_LOCATION: {
          idx: 4,
          min: 1,
          desc: 'Mf location',
          segments: {
            LDP: {
              idx: 0,
              min: 1,
              max: 1,
              desc: 'Location Department',
            },
            LCH: {
              idx: 1,
              desc: 'Location Characteristic',
            },
            LCC: {
              idx: 2,
              desc: 'Location Charge Code',
            },
          },
        },
      },
    },
    DSC: {
      idx: 10,
      max: 1,
      desc: 'Continuation',
    },
  },
};

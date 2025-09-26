import { HL7MessageDefinition } from '../../types.js';

export const RSP_K25: HL7MessageDefinition = {
  desc: 'Segment pattern response',
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
      desc: 'Message Acknowledgement',
    },
    ERR: {
      idx: 4,
      desc: 'Error',
    },
    QAK: {
      idx: 5,
      min: 1,
      max: 1,
      desc: 'Query Acknowledgement',
    },
    QPD: {
      idx: 6,
      min: 1,
      max: 1,
      desc: 'Query Parameter Definition',
    },
    RCP: {
      idx: 7,
      min: 1,
      max: 1,
      desc: 'Response Control Parameter',
    },
    STAFF: {
      idx: 8,
      min: 1,
      desc: 'Staff',
      segments: {
        STF: {
          idx: 0,
          min: 1,
          max: 1,
          desc: 'Staff',
        },
        PRA: {
          idx: 1,
          desc: 'Practitioner',
        },
        ORG: {
          idx: 2,
          desc: 'Organization',
        },
        AFF: {
          idx: 3,
          desc: 'Affiliation',
        },
        LAN: {
          idx: 4,
          desc: 'Language',
        },
        EDU: {
          idx: 5,
          desc: 'Education',
        },
        CER: {
          idx: 6,
          desc: 'Certificate',
        },
      },
    },
    DSC: {
      idx: 9,
      max: 1,
      desc: 'Continuation Pointer',
    },
  },
};

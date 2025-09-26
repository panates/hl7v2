import { HL7MessageDefinition } from '../../types.js';

export const RSP_K25: HL7MessageDefinition = {
  desc: 'Segment pattern response',
  segments: {
    MSH: {
      idx: 0,
      min: 1,
      max: 1,
      desc: 'Message header',
    },
    SFT: {
      idx: 1,
      desc: 'Software segment',
    },
    MSA: {
      idx: 2,
      min: 1,
      max: 1,
      desc: 'Message acknowledgment',
    },
    ERR: {
      idx: 3,
      desc: 'Error',
    },
    QAK: {
      idx: 4,
      min: 1,
      max: 1,
      desc: 'Query acknowledgment',
    },
    QPD: {
      idx: 5,
      min: 1,
      max: 1,
      desc: 'Query parameter definition',
    },
    RCP: {
      idx: 6,
      min: 1,
      max: 1,
      desc: 'Response control parameter',
    },
    STAFF: {
      idx: 7,
      min: 1,
      desc: 'Staff',
      segments: {
        STF: {
          idx: 0,
          min: 1,
          max: 1,
          desc: 'Staff identification',
        },
        PRA: {
          idx: 1,
          desc: 'Practitioner detail',
        },
        ORG: {
          idx: 2,
          desc: 'Practitioner organization unit',
        },
        AFF: {
          idx: 3,
          desc: 'Professional affiliation',
        },
        LAN: {
          idx: 4,
          desc: 'Language detail',
        },
        EDU: {
          idx: 5,
          desc: 'Educational detail',
        },
        CER: {
          idx: 6,
          desc: 'Certificate detail',
        },
      },
    },
    DSC: {
      idx: 8,
      max: 1,
      desc: 'Continuation pointer',
    },
  },
};

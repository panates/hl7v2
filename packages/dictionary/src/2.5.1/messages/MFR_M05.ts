import { HL7MessageDefinition } from '../../types.js';

export const MFR_M05: HL7MessageDefinition = {
  desc: 'Master files response',
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
      max: 1,
      desc: 'Query acknowledgment',
    },
    QRD: {
      idx: 5,
      min: 1,
      max: 1,
      desc: 'Original-style query definition',
    },
    QRF: {
      idx: 6,
      max: 1,
      desc: 'Original style query filter',
    },
    MFI: {
      idx: 7,
      min: 1,
      max: 1,
      desc: 'Master file identification',
    },
    MF_QUERY: {
      idx: 8,
      min: 1,
      desc: 'Mf query',
      segments: {
        MFE: {
          idx: 0,
          min: 1,
          max: 1,
          desc: 'Master file entry',
        },
        LOC: {
          idx: 1,
          min: 1,
          max: 1,
          desc: 'Location identification',
        },
        LCH: {
          idx: 5,
          desc: 'Location characteristic',
        },
        LRL: {
          idx: 3,
          desc: 'Location relationship',
        },
        LDP: {
          idx: 4,
          min: 1,
          desc: 'Location department',
        },
        LCC: {
          idx: 6,
          desc: 'Location charge code',
        },
      },
    },
    DSC: {
      idx: 9,
      max: 1,
      desc: 'Continuation pointer',
    },
  },
};

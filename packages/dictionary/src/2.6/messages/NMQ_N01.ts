import { HL7MessageDefinition } from '../../types.js';

export const NMQ_N01: HL7MessageDefinition = {
  desc: 'Application management query message',
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
    QRY_WITH_DETAIL: {
      idx: 3,
      max: 1,
      desc: 'Qry with detail',
      segments: {
        QRD: {
          idx: 0,
          min: 1,
          max: 1,
          desc: 'Query Definition',
        },
        QRF: {
          idx: 1,
          max: 1,
          desc: 'Query Filter',
        },
      },
    },
    CLOCK_AND_STATISTICS: {
      idx: 4,
      min: 1,
      desc: 'Clock and statistics',
      segments: {
        NCK: {
          idx: 0,
          max: 1,
          desc: 'System Clock',
        },
        NST: {
          idx: 1,
          max: 1,
          desc: 'Application control-level Statistics',
        },
        NSC: {
          idx: 2,
          max: 1,
          desc: 'Application Status Change',
        },
      },
    },
  },
};

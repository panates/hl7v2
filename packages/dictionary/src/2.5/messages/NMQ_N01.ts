import { HL7MessageDefinition } from '../../types.js';

export const NMQ_N01: HL7MessageDefinition = {
  desc: 'Application management query message',
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
    QRY_WITH_DETAIL: {
      idx: 2,
      max: 1,
      desc: 'Qry with detail',
      segments: {
        QRD: {
          idx: 0,
          min: 1,
          max: 1,
          desc: 'Original-style query definition',
        },
        QRF: {
          idx: 1,
          max: 1,
          desc: 'Original style query filter',
        },
      },
    },
    CLOCK_AND_STATISTICS: {
      idx: 3,
      min: 1,
      desc: 'Clock and statistics',
      segments: {
        NCK: {
          idx: 0,
          max: 1,
          desc: 'System clock',
        },
        NST: {
          idx: 1,
          max: 1,
          desc: 'Application control level statistics',
        },
        NSC: {
          idx: 2,
          max: 1,
          desc: 'Application status change',
        },
      },
    },
  },
};

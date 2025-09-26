import { HL7MessageDefinition } from '../../types.js';

export const NMQ_N01: HL7MessageDefinition = {
  desc: 'Application management query message',
  segments: {
    MSH: {
      idx: 0,
      min: 1,
      max: 1,
      desc: 'MSH - message header segment',
    },
    QRY_WITH_DETAIL: {
      idx: 1,
      max: 1,
      desc: 'Qry with detail',
      segments: {
        QRD: {
          idx: 0,
          min: 1,
          max: 1,
          desc: 'QRD - original-style query definition segment',
        },
        QRF: {
          idx: 1,
          max: 1,
          desc: 'QRF - original style query filter segment',
        },
      },
    },
    CLOCK_AND_STATISTICS: {
      idx: 2,
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

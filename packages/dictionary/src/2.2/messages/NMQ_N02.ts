import { HL7MessageDefinition } from '../../types.js';

export const NMQ_N02: HL7MessageDefinition = {
  desc: 'Application management query message',
  segments: {
    MSH: {
      idx: 0,
      min: 1,
      max: 1,
      desc: 'Message header',
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
          desc: 'Query definition',
        },
        QRF: {
          idx: 1,
          max: 1,
          desc: 'Query filter',
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
          desc: 'System clock',
        },
        NST: {
          idx: 1,
          max: 1,
          desc: 'Statistics',
        },
        NSC: {
          idx: 2,
          max: 1,
          desc: 'Status change',
        },
      },
    },
  },
};

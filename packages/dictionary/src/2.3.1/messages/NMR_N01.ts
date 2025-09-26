import { HL7MessageDefinition } from '../../types.js';

export const NMR_N01: HL7MessageDefinition = {
  desc: 'Application management response',
  segments: {
    MSH: {
      idx: 0,
      min: 1,
      max: 1,
      desc: 'MSH - message header segment',
    },
    MSA: {
      idx: 1,
      min: 1,
      max: 1,
      desc: 'MSA - message acknowledgment segment',
    },
    ERR: {
      idx: 2,
      desc: 'ERR - error segment',
    },
    QRD: {
      idx: 3,
      max: 1,
      desc: 'QRD - original-style query definition segment',
    },
    CLOCK_AND_STATS_WITH_NOTES_ALT: {
      idx: 4,
      min: 1,
      desc: 'Clock and stats with notes alt',
      segments: {
        NCK: {
          idx: 0,
          max: 1,
          desc: 'System Clock',
        },
        NTE: {
          idx: 5,
          desc: 'NTE - notes and comments segment',
        },
        NST: {
          idx: 2,
          max: 1,
          desc: 'Application control level statistics',
        },
        NSC: {
          idx: 4,
          max: 1,
          desc: 'Application status change',
        },
      },
    },
  },
};

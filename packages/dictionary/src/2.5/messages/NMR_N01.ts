import { HL7MessageDefinition } from '../../types.js';

export const NMR_N01: HL7MessageDefinition = {
  desc: 'Application management response',
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
    QRD: {
      idx: 4,
      max: 1,
      desc: 'Original-style query definition',
    },
    CLOCK_AND_STATS_WITH_NOTES_ALT: {
      idx: 5,
      min: 1,
      desc: 'Clock and stats with notes alt',
      segments: {
        NCK: {
          idx: 0,
          max: 1,
          desc: 'System clock',
        },
        NTE: {
          idx: 5,
          desc: 'Notes and comments',
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

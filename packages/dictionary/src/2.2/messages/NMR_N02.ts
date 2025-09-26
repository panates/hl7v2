import { HL7MessageDefinition } from '../../types.js';

export const NMR_N02: HL7MessageDefinition = {
  desc: 'Application management response message',
  segments: {
    MSH: {
      idx: 0,
      min: 1,
      max: 1,
      desc: 'Message header',
    },
    MSA: {
      idx: 1,
      min: 1,
      max: 1,
      desc: 'Message acknowledgment',
    },
    ERR: {
      idx: 2,
      max: 1,
      desc: 'Error',
    },
    QRD: {
      idx: 3,
      max: 1,
      desc: 'Query definition',
    },
    CLOCK_AND_STATS_WITH_NOTES_ALT: {
      idx: 4,
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
          desc: 'Statistics',
        },
        NSC: {
          idx: 4,
          max: 1,
          desc: 'Status change',
        },
      },
    },
  },
};

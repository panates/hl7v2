import { HL7MessageDefinition } from '../../types.js';

export const NMD_N02: HL7MessageDefinition = {
  desc: 'Application management data message',
  segments: {
    MSH: {
      idx: 0,
      min: 1,
      max: 1,
      desc: 'MSH - message header segment',
    },
    CLOCK_AND_STATS_WITH_NOTES: {
      idx: 1,
      min: 1,
      desc: 'Clock and stats with notes',
      segments: {
        CLOCK: {
          idx: 0,
          max: 1,
          desc: 'Clock',
          segments: {
            NCK: {
              idx: 0,
              min: 1,
              max: 1,
              desc: 'System Clock',
            },
            NTE: {
              idx: 1,
              desc: 'NTE - notes and comments segment',
            },
          },
        },
        APP_STATS: {
          idx: 1,
          max: 1,
          desc: 'App stats',
          segments: {
            NST: {
              idx: 0,
              min: 1,
              max: 1,
              desc: 'Application control level statistics',
            },
            NTE: {
              idx: 1,
              desc: 'NTE - notes and comments segment',
            },
          },
        },
        APP_STATUS: {
          idx: 2,
          max: 1,
          desc: 'App status',
          segments: {
            NSC: {
              idx: 0,
              min: 1,
              max: 1,
              desc: 'Application status change',
            },
            NTE: {
              idx: 1,
              desc: 'NTE - notes and comments segment',
            },
          },
        },
      },
    },
  },
};

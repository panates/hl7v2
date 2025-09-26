import { HL7MessageDefinition } from '../../types.js';

export const NMD_N02: HL7MessageDefinition = {
  desc: 'Application Management Data',
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
    CLOCK_AND_STATS_WITH_NOTES: {
      idx: 3,
      min: 1,
      desc: 'Clock And Stats With Notes',
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
              desc: 'Notes and Comments for NCK',
            },
          },
        },
        APP_STATS: {
          idx: 1,
          max: 1,
          desc: 'App Stats',
          segments: {
            NST: {
              idx: 0,
              min: 1,
              max: 1,
              desc: 'Application control-level Statistics',
            },
            NTE: {
              idx: 1,
              desc: 'Notes and Comments for NST',
            },
          },
        },
        APP_STATUS: {
          idx: 2,
          max: 1,
          desc: 'App Status',
          segments: {
            NSC: {
              idx: 0,
              min: 1,
              max: 1,
              desc: 'Application Status Change',
            },
            NTE: {
              idx: 1,
              desc: 'Notes and Comments for NSC',
            },
          },
        },
      },
    },
  },
};

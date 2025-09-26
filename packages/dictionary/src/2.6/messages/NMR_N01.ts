import { HL7MessageDefinition } from '../../types.js';

export const NMR_N01: HL7MessageDefinition = {
  desc: 'Application management response',
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
    MSA: {
      idx: 3,
      min: 1,
      max: 1,
      desc: 'Message Acknowledgement',
    },
    ERR: {
      idx: 4,
      desc: 'Error',
    },
    QRD: {
      idx: 5,
      max: 1,
      desc: 'Query Definition',
    },
    CLOCK_AND_STATS_WITH_NOTES_ALT: {
      idx: 6,
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
          desc: 'Notes and Comments for NSC',
        },
        NST: {
          idx: 2,
          max: 1,
          desc: 'Application control-level Statistics',
        },
        NSC: {
          idx: 4,
          max: 1,
          desc: 'Application Status Change',
        },
      },
    },
  },
};

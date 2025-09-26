import { HL7MessageDefinition } from '../../types.js';

export const MDM_T02: HL7MessageDefinition = {
  desc: 'Original document notification and content',
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
    EVN: {
      idx: 2,
      min: 1,
      max: 1,
      desc: 'Event type',
    },
    PID: {
      idx: 3,
      min: 1,
      max: 1,
      desc: 'Patient identification',
    },
    PV1: {
      idx: 4,
      min: 1,
      max: 1,
      desc: 'Patient visit',
    },
    COMMON_ORDER: {
      idx: 5,
      desc: 'Common order',
      segments: {
        ORC: {
          idx: 0,
          min: 1,
          max: 1,
          desc: 'Common order',
        },
        TIMING: {
          idx: 1,
          desc: 'Timing',
          segments: {
            TQ1: {
              idx: 0,
              min: 1,
              max: 1,
              desc: 'Timing/quantity',
            },
            TQ2: {
              idx: 1,
              desc: 'Timing/quantity relationship',
            },
          },
        },
        OBR: {
          idx: 2,
          min: 1,
          max: 1,
          desc: 'Observation request',
        },
        NTE: {
          idx: 3,
          desc: 'Notes and comments',
        },
      },
    },
    TXA: {
      idx: 6,
      min: 1,
      max: 1,
      desc: 'Transcription document header',
    },
    OBXNTE: {
      idx: 7,
      min: 1,
      desc: 'Obxnte',
      segments: {
        OBX: {
          idx: 0,
          min: 1,
          max: 1,
          desc: 'Observation/result',
        },
        NTE: {
          idx: 1,
          desc: 'Notes and comments',
        },
      },
    },
  },
};

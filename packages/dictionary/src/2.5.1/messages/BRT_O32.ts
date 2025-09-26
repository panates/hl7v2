import { HL7MessageDefinition } from '../../types.js';

export const BRT_O32: HL7MessageDefinition = {
  desc: 'Brt message',
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
      desc: 'Error',
    },
    SFT: {
      idx: 3,
      desc: 'Software segment',
    },
    NTE: {
      idx: 4,
      desc: 'Notes and comments',
    },
    RESPONSE: {
      idx: 5,
      max: 1,
      desc: 'Response',
      segments: {
        PID: {
          idx: 0,
          max: 1,
          desc: 'Patient identification',
        },
        ORDER: {
          idx: 1,
          desc: 'Order',
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
            BPO: {
              idx: 2,
              max: 1,
              desc: 'Blood product order',
            },
            BTX: {
              idx: 3,
              desc: 'Blood product transfusion/disposition',
            },
          },
        },
      },
    },
  },
};

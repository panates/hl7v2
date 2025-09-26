import { HL7MessageDefinition } from '../../types.js';

export const ORP_O10: HL7MessageDefinition = {
  desc: 'Pharmacy/treatment order acknowledgement',
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
        PATIENT: {
          idx: 0,
          max: 1,
          desc: 'Patient',
          segments: {
            PID: {
              idx: 0,
              min: 1,
              max: 1,
              desc: 'Patient identification',
            },
            NTE: {
              idx: 1,
              desc: 'Notes and comments',
            },
          },
        },
        ORDER: {
          idx: 1,
          min: 1,
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
            ORDER_DETAIL: {
              idx: 2,
              max: 1,
              desc: 'Order detail',
              segments: {
                RXO: {
                  idx: 0,
                  min: 1,
                  max: 1,
                  desc: 'Pharmacy/treatment order',
                },
                NTE: {
                  idx: 1,
                  desc: 'Notes and comments',
                },
                RXR: {
                  idx: 2,
                  min: 1,
                  desc: 'Pharmacy/treatment route',
                },
                COMPONENT: {
                  idx: 3,
                  desc: 'Component',
                  segments: {
                    RXC: {
                      idx: 0,
                      min: 1,
                      max: 1,
                      desc: 'Pharmacy/treatment component order',
                    },
                    NTE: {
                      idx: 1,
                      desc: 'Notes and comments',
                    },
                  },
                },
              },
            },
          },
        },
      },
    },
  },
};

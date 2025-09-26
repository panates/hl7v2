import { HL7MessageDefinition } from '../../types.js';

export const RRE_O12: HL7MessageDefinition = {
  desc: 'Pharmacy/treatment encoded order acknowledgement',
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
            ENCODING: {
              idx: 2,
              max: 1,
              desc: 'Encoding',
              segments: {
                RXE: {
                  idx: 0,
                  min: 1,
                  max: 1,
                  desc: 'Pharmacy/treatment encoded order',
                },
                NTE: {
                  idx: 1,
                  desc: 'Notes and comments',
                },
                TIMING_ENCODED: {
                  idx: 2,
                  min: 1,
                  desc: 'Timing encoded',
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
                RXR: {
                  idx: 3,
                  min: 1,
                  desc: 'Pharmacy/treatment route',
                },
                RXC: {
                  idx: 4,
                  desc: 'Pharmacy/treatment component order',
                },
              },
            },
          },
        },
      },
    },
  },
};

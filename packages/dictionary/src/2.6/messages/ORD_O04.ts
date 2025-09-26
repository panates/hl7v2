import { HL7MessageDefinition } from '../../types.js';

export const ORD_O04: HL7MessageDefinition = {
  desc: 'Diet order acknowledgement',
  segments: {
    MSH: {
      idx: 0,
      min: 1,
      max: 1,
      desc: 'Message Header',
    },
    MSA: {
      idx: 1,
      min: 1,
      max: 1,
      desc: 'Message Acknowledgment',
    },
    ERR: {
      idx: 2,
      desc: 'Error',
    },
    SFT: {
      idx: 3,
      desc: 'Software',
    },
    UAC: {
      idx: 4,
      max: 1,
      desc: 'User Authentication Credential',
    },
    NTE: {
      idx: 5,
      desc: 'Notes and Comments (for MSA)',
    },
    RESPONSE: {
      idx: 6,
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
              desc: 'Patient Identification',
            },
            NTE: {
              idx: 1,
              desc: 'Notes and Comments (for Patient ID)',
            },
          },
        },
        ORDER_DIET: {
          idx: 1,
          min: 1,
          desc: 'Order diet',
          segments: {
            ORC: {
              idx: 0,
              min: 1,
              max: 1,
              desc: 'Common Order',
            },
            TIMING_DIET: {
              idx: 1,
              desc: 'Timing diet',
              segments: {
                TQ1: {
                  idx: 0,
                  min: 1,
                  max: 1,
                  desc: 'Timing/Quantity',
                },
                TQ2: {
                  idx: 1,
                  desc: 'Timing/Quantity Order Sequence',
                },
              },
            },
            ODS: {
              idx: 2,
              desc: 'Dietary Orders, Supplements, and Preferences',
            },
            NTE: {
              idx: 3,
              desc: 'Notes and Comments (for ODS)',
            },
          },
        },
        ORDER_TRAY: {
          idx: 2,
          desc: 'Order tray',
          segments: {
            ORC: {
              idx: 0,
              min: 1,
              max: 1,
              desc: 'Common Order',
            },
            TIMING_TRAY: {
              idx: 1,
              desc: 'Timing tray',
              segments: {
                TQ1: {
                  idx: 0,
                  min: 1,
                  max: 1,
                  desc: 'Timing/Quantity',
                },
                TQ2: {
                  idx: 1,
                  desc: 'Timing/Quantity Order Sequence',
                },
              },
            },
            ODT: {
              idx: 2,
              desc: 'Diet Tray Instructions',
            },
            NTE: {
              idx: 3,
              desc: 'Notes and Comments (for ODT)',
            },
          },
        },
      },
    },
  },
};

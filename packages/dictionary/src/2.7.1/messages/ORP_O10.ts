import { HL7MessageDefinition } from '../../types.js';

export const ORP_O10: HL7MessageDefinition = {
  desc: 'Description',
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
      desc: 'Notes and Comments (for Response Header)',
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
        ORDER: {
          idx: 1,
          min: 1,
          desc: 'Order',
          segments: {
            ORC: {
              idx: 0,
              min: 1,
              max: 1,
              desc: 'Common Order',
            },
            PRT: {
              idx: 1,
              desc: 'Participation (for ORC)',
            },
            TIMING: {
              idx: 2,
              desc: 'Timing',
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
            ORDER_DETAIL: {
              idx: 3,
              max: 1,
              desc: 'Order Detail',
              segments: {
                RXO: {
                  idx: 0,
                  min: 1,
                  max: 1,
                  desc: 'Pharmacy/Treatment Order',
                },
                PRT: {
                  idx: 1,
                  desc: 'Participation (for RXO)',
                },
                NTE: {
                  idx: 2,
                  desc: 'Notes and Comments (for RXO)',
                },
                RXR: {
                  idx: 3,
                  min: 1,
                  desc: 'Pharmacy/Treatment Route',
                },
                COMPONENT: {
                  idx: 4,
                  desc: 'Component',
                  segments: {
                    RXC: {
                      idx: 0,
                      min: 1,
                      max: 1,
                      desc: 'Pharmacy/Treatment Component',
                    },
                    NTE: {
                      idx: 1,
                      desc: 'Notes and Comments (for each RXC)',
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

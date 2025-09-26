import { HL7MessageDefinition } from '../../types.js';

export const RRG_O16: HL7MessageDefinition = {
  desc: 'Pharmacy/treatment give acknowledgement',
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
      desc: 'Notes and Comments (for Header)',
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
              desc: 'Notes and Comments (for PID)',
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
            TIMING: {
              idx: 1,
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
            GIVE: {
              idx: 2,
              max: 1,
              desc: 'Give',
              segments: {
                RXG: {
                  idx: 0,
                  min: 1,
                  max: 1,
                  desc: 'Pharmacy/Treatment Give',
                },
                TIMING_GIVE: {
                  idx: 1,
                  min: 1,
                  desc: 'Timing give',
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
                RXR: {
                  idx: 2,
                  min: 1,
                  desc: 'Pharmacy/Treatment Route',
                },
                RXC: {
                  idx: 3,
                  desc: 'Pharmacy/Treatment Component',
                },
              },
            },
          },
        },
      },
    },
  },
};

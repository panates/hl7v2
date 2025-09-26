import { HL7MessageDefinition } from '../../types.js';

export const OSR_Q06: HL7MessageDefinition = {
  desc: 'Query response for order status',
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
    QRD: {
      idx: 6,
      min: 1,
      max: 1,
      desc: 'Query Definition',
    },
    QRF: {
      idx: 7,
      max: 1,
      desc: 'Query Filter',
    },
    RESPONSE: {
      idx: 8,
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
            'OBR,RQD,RQ1,RXO,ODS,ODT': {
              idx: 2,
              desc: 'Details',
            },
            NTE: {
              idx: 3,
              desc: 'Notes and Comments (for Detail)',
            },
            CTI: {
              idx: 4,
              desc: 'Clinical Trial Identification',
            },
          },
        },
      },
    },
    DSC: {
      idx: 9,
      max: 1,
      desc: 'Continuation Pointer',
    },
  },
};

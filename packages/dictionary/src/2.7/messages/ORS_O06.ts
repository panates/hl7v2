import { HL7MessageDefinition } from '../../types.js';

export const ORS_O06: HL7MessageDefinition = {
  desc: 'Stock Order Acknowledgment Message',
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
            RQD: {
              idx: 2,
              min: 1,
              max: 1,
              desc: 'Requisition Detail',
            },
            RQ1: {
              idx: 3,
              max: 1,
              desc: 'Requisition Detail-1',
            },
            NTE: {
              idx: 4,
              desc: 'Notes and Comments (for RQD)',
            },
          },
        },
      },
    },
  },
};

import { HL7MessageDefinition } from '../../types.js';

export const RRA_O18: HL7MessageDefinition = {
  desc: 'Pharmacy/treatment administration acknowledgement',
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
      max: 1,
      desc: 'Error',
    },
    NTE: {
      idx: 3,
      desc: 'Notes and comments',
    },
    RESPONSE: {
      idx: 4,
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
            ADMINISTRATION: {
              idx: 1,
              max: 1,
              desc: 'Administration',
              segments: {
                RXA: {
                  idx: 0,
                  min: 1,
                  desc: 'Pharmacy/treatment administration',
                },
                RXR: {
                  idx: 1,
                  min: 1,
                  max: 1,
                  desc: 'Pharmacy/treatment route',
                },
              },
            },
          },
        },
      },
    },
  },
};

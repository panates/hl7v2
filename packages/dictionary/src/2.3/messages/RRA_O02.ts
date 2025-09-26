import { HL7MessageDefinition } from '../../types.js';

export const RRA_O02: HL7MessageDefinition = {
  desc: 'Pharmacy/treatment administration acknowledgment message',
  segments: {
    MSH: {
      idx: 0,
      min: 1,
      max: 1,
      desc: 'Message header segment',
    },
    MSA: {
      idx: 1,
      min: 1,
      max: 1,
      desc: 'Message acknowledgement segment',
    },
    ERR: {
      idx: 2,
      max: 1,
      desc: 'Error segment',
    },
    NTE: {
      idx: 3,
      desc: 'Notes and comments segment',
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
              desc: 'Notes and comments segment',
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
              desc: 'Common order segment',
            },
            ADMINISTRATION: {
              idx: 1,
              desc: 'Administration',
              segments: {
                RXA: {
                  idx: 0,
                  min: 1,
                  max: 1,
                  desc: 'Pharmacy administration segment',
                },
                RXR: {
                  idx: 1,
                  min: 1,
                  max: 1,
                  desc: 'Pharmacy route segment',
                },
              },
            },
          },
        },
      },
    },
  },
};

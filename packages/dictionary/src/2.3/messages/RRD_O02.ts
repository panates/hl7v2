import { HL7MessageDefinition } from '../../types.js';

export const RRD_O02: HL7MessageDefinition = {
  desc: 'Pharmacy/treatment dispense acknowledgment message',
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
    PATIENT: {
      idx: 4,
      max: 1,
      desc: 'Patient',
      segments: {
        RESPONSE: {
          idx: 0,
          max: 1,
          desc: 'Response',
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
            DISPENSE: {
              idx: 1,
              max: 1,
              desc: 'Dispense',
              segments: {
                RXD: {
                  idx: 0,
                  min: 1,
                  max: 1,
                  desc: 'Pharmacy dispense segment',
                },
                RXR: {
                  idx: 1,
                  min: 1,
                  desc: 'Pharmacy route segment',
                },
                RXC: {
                  idx: 2,
                  desc: 'Pharmacy component order segment',
                },
              },
            },
          },
        },
      },
    },
  },
};

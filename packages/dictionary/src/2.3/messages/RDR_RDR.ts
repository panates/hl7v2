import { HL7MessageDefinition } from '../../types.js';

export const RDR_RDR: HL7MessageDefinition = {
  desc: 'Pharmacy/treatment dispense information',
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
    DEFINITION: {
      idx: 3,
      min: 1,
      desc: 'Definition',
      segments: {
        QRD: {
          idx: 0,
          min: 1,
          max: 1,
          desc: 'Query definition segment',
        },
        QRF: {
          idx: 1,
          max: 1,
          desc: 'Query filter segment',
        },
        PATIENT: {
          idx: 2,
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
          idx: 3,
          min: 1,
          desc: 'Order',
          segments: {
            ORC: {
              idx: 0,
              min: 1,
              max: 1,
              desc: 'Common order segment',
            },
            ENCODING: {
              idx: 1,
              max: 1,
              desc: 'Encoding',
              segments: {
                RXE: {
                  idx: 0,
                  min: 1,
                  max: 1,
                  desc: 'Pharmacy encoded order segment',
                },
                RXR: {
                  idx: 1,
                  min: 1,
                  max: 1,
                  desc: 'Pharmacy route segment',
                },
                RXC: {
                  idx: 2,
                  desc: 'Pharmacy component order segment',
                },
              },
            },
            DISPENSE: {
              idx: 2,
              min: 1,
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
    DSC: {
      idx: 4,
      max: 1,
      desc: 'Continuation pointer segment',
    },
  },
};

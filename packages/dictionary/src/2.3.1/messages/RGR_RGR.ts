import { HL7MessageDefinition } from '../../types.js';

export const RGR_RGR: HL7MessageDefinition = {
  desc: 'Pharmacy/treatment dose information',
  segments: {
    MSH: {
      idx: 0,
      min: 1,
      max: 1,
      desc: 'MSH - message header segment',
    },
    MSA: {
      idx: 1,
      min: 1,
      max: 1,
      desc: 'MSA - message acknowledgment segment',
    },
    ERR: {
      idx: 2,
      max: 1,
      desc: 'ERR - error segment',
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
          desc: 'QRD - original-style query definition segment',
        },
        QRF: {
          idx: 1,
          max: 1,
          desc: 'QRF - original style query filter segment',
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
              desc: 'PID - patient identification segment',
            },
            NTE: {
              idx: 1,
              desc: 'NTE - notes and comments segment',
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
              desc: 'ORC - common order segment',
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
                  desc: 'RXE - pharmacy/treatment encoded order segment',
                },
                RXR: {
                  idx: 1,
                  min: 1,
                  desc: 'RXR - pharmacy/treatment route segment',
                },
                RXC: {
                  idx: 2,
                  desc: 'RXC - pharmacy/treatment component order segment',
                },
              },
            },
            RXG: {
              idx: 2,
              min: 1,
              desc: 'RXG - pharmacy/treatment give segment',
            },
            RXR: {
              idx: 3,
              min: 1,
              desc: 'RXR - pharmacy/treatment route segment',
            },
            RXC: {
              idx: 4,
              desc: 'RXC - pharmacy/treatment component order segment',
            },
          },
        },
      },
    },
    DSC: {
      idx: 4,
      max: 1,
      desc: 'DSC - Continuation pointer segment',
    },
  },
};

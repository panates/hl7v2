import { HL7MessageDefinition } from '../../types.js';

export const RER_RER: HL7MessageDefinition = {
  desc: 'Pharmacy/treatment encoded order information',
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
    DEFINITION: {
      idx: 3,
      min: 1,
      desc: 'Definition',
      segments: {
        QRD: {
          idx: 0,
          min: 1,
          max: 1,
          desc: 'Original-style query definition',
        },
        QRF: {
          idx: 1,
          max: 1,
          desc: 'Original style query filter',
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
              desc: 'Notes and comments',
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
              desc: 'Common order',
            },
            RXE: {
              idx: 1,
              min: 1,
              max: 1,
              desc: 'Pharmacy/treatment encoded order',
            },
            RXR: {
              idx: 2,
              min: 1,
              desc: 'Pharmacy/treatment route',
            },
            RXC: {
              idx: 3,
              desc: 'Pharmacy/treatment component order',
            },
          },
        },
      },
    },
    DSC: {
      idx: 4,
      max: 1,
      desc: 'Continuation pointer',
    },
  },
};

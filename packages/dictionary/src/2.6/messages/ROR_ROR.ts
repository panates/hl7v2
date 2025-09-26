import { HL7MessageDefinition } from '../../types.js';

export const ROR_ROR: HL7MessageDefinition = {
  desc: 'Pharmacy prescription order query response',
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
    DEFINITION: {
      idx: 5,
      min: 1,
      desc: 'Definition',
      segments: {
        QRD: {
          idx: 0,
          min: 1,
          max: 1,
          desc: 'Query Definition',
        },
        QRF: {
          idx: 1,
          max: 1,
          desc: 'Query Filter',
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
              desc: 'Patient Identification',
            },
            NTE: {
              idx: 1,
              desc: 'Notes and Comments (for PID)',
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
              desc: 'Common Order',
            },
            RXO: {
              idx: 1,
              min: 1,
              max: 1,
              desc: 'Pharmacy/Treatment Order',
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
    DSC: {
      idx: 6,
      max: 1,
      desc: 'Continuation Pointer',
    },
  },
};

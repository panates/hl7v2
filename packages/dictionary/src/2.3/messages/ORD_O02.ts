import { HL7MessageDefinition } from '../../types.js';

export const ORD_O02: HL7MessageDefinition = {
  desc: 'Dietary order acknowledgment message',
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
        ORDER_DIET: {
          idx: 1,
          min: 1,
          desc: 'Order diet',
          segments: {
            ORC: {
              idx: 0,
              min: 1,
              max: 1,
              desc: 'Common order segment',
            },
            ODS: {
              idx: 1,
              desc: 'Dietary orders, supplements, and preferences',
            },
            NTE: {
              idx: 2,
              desc: 'Notes and comments segment',
            },
          },
        },
        ORDER_TRAY: {
          idx: 2,
          desc: 'Order tray',
          segments: {
            ORC: {
              idx: 0,
              min: 1,
              max: 1,
              desc: 'Common order segment',
            },
            ODT: {
              idx: 1,
              desc: 'Diet tray instructions segment',
            },
            NTE: {
              idx: 2,
              desc: 'Notes and comments segment',
            },
          },
        },
      },
    },
  },
};

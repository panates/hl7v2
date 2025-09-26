import { HL7MessageDefinition } from '../../types.js';

export const ORD_O04: HL7MessageDefinition = {
  desc: 'Diet order acknowledgement',
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
        ORDER_DIET: {
          idx: 1,
          min: 1,
          desc: 'Order diet',
          segments: {
            ORC: {
              idx: 0,
              min: 1,
              max: 1,
              desc: 'Common order',
            },
            ODS: {
              idx: 1,
              desc: 'Dietary orders, supplements, and preferences',
            },
            NTE: {
              idx: 2,
              desc: 'Notes and comments',
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
              desc: 'Common order',
            },
            ODT: {
              idx: 1,
              desc: 'Diet tray instructions',
            },
            NTE: {
              idx: 2,
              desc: 'Notes and comments',
            },
          },
        },
      },
    },
  },
};

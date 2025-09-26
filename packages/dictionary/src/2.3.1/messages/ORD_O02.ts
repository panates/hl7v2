import { HL7MessageDefinition } from '../../types.js';

export const ORD_O02: HL7MessageDefinition = {
  desc: 'Dietary order acknowledgment message',
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
    NTE: {
      idx: 3,
      desc: 'NTE - notes and comments segment',
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
              desc: 'PID - patient identification segment',
            },
            NTE: {
              idx: 1,
              desc: 'NTE - notes and comments segment',
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
              desc: 'ORC - common order segment',
            },
            ODS: {
              idx: 1,
              desc: 'ODS - dietary orders, supplements, and preferences segment',
            },
            NTE: {
              idx: 2,
              desc: 'NTE - notes and comments segment',
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
              desc: 'ORC - common order segment',
            },
            ODT: {
              idx: 1,
              desc: 'ODT - diet tray instructions segment',
            },
            NTE: {
              idx: 2,
              desc: 'NTE - notes and comments segment',
            },
          },
        },
      },
    },
  },
};

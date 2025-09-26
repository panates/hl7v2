import { HL7MessageDefinition } from '../../types.js';

export const OSR_Q06: HL7MessageDefinition = {
  desc: 'Query response for order status',
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
    QRD: {
      idx: 4,
      min: 1,
      max: 1,
      desc: 'Original-style query definition',
    },
    QRF: {
      idx: 5,
      max: 1,
      desc: 'Original style query filter',
    },
    RESPONSE: {
      idx: 6,
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
            'OBR,RQD,RQ1,RXO,ODS,ODT': {
              idx: 1,
              desc: 'Details',
            },
            NTE: {
              idx: 2,
              desc: 'Notes and comments',
            },
            CTI: {
              idx: 3,
              desc: 'Clinical trial identification',
            },
          },
        },
      },
    },
    DSC: {
      idx: 7,
      max: 1,
      desc: 'Continuation pointer',
    },
  },
};

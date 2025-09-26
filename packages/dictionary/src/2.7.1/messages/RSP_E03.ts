import { HL7MessageDefinition } from '../../types.js';

export const RSP_E03: HL7MessageDefinition = {
  desc: 'HealthCare Services Invoice Query Response',
  segments: {
    MSH: {
      idx: 0,
      min: 1,
      max: 1,
      desc: 'Message Header',
    },
    SFT: {
      idx: 1,
      desc: 'Software',
    },
    UAC: {
      idx: 2,
      desc: 'User Authentication Credential',
    },
    MSA: {
      idx: 3,
      min: 1,
      max: 1,
      desc: 'Message Acknowledgement',
    },
    ERR: {
      idx: 4,
      desc: 'Error',
    },
    QUERY_ACK: {
      idx: 5,
      min: 1,
      max: 1,
      desc: 'Query Ack',
      segments: {
        QAK: {
          idx: 0,
          min: 1,
          max: 1,
          desc: 'Query Acknowledgement',
        },
        QPD: {
          idx: 1,
          min: 1,
          max: 1,
          desc: 'Query Parameter Definition',
        },
        INVOICE_PROCESSING_RESULTS_INFO: {
          idx: 2,
          desc: 'Invoice Processing Results Info',
          segments: {
            IPR: {
              idx: 0,
              min: 1,
              max: 1,
              desc: 'Invoice Processing Results',
            },
          },
        },
      },
    },
  },
};

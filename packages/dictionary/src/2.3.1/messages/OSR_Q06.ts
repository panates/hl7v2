import { HL7MessageDefinition } from '../../types.js';

export const OSR_Q06: HL7MessageDefinition = {
  desc: 'Query response for order status',
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
    QRD: {
      idx: 4,
      min: 1,
      max: 1,
      desc: 'QRD - original-style query definition segment',
    },
    QRF: {
      idx: 5,
      max: 1,
      desc: 'QRF - original style query filter segment',
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
              desc: 'PID - patient identification segment',
            },
            NTE: {
              idx: 1,
              desc: 'NTE - notes and comments segment',
            },
          },
        },
        OBSERVATION: {
          idx: 1,
          min: 1,
          desc: 'Observation',
          segments: {
            ORC: {
              idx: 0,
              min: 1,
              max: 1,
              desc: 'ORC - common order segment',
            },
            'OBR,RQD,RQ1,RXO,ODS,ODT': {
              idx: 1,
              desc: 'Details',
            },
            NTE: {
              idx: 2,
              desc: 'NTE - notes and comments segment',
            },
            CTI: {
              idx: 3,
              desc: 'CTI - clinical trial identification segment',
            },
          },
        },
      },
    },
    DSC: {
      idx: 7,
      max: 1,
      desc: 'DSC - Continuation pointer segment',
    },
  },
};

import { HL7MessageDefinition } from '../../types.js';

export const ORN_O02: HL7MessageDefinition = {
  desc: 'Non-stock requisition - general order acknowledgment message',
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
        ORDER: {
          idx: 1,
          min: 1,
          desc: 'Order',
          segments: {
            ORC: {
              idx: 0,
              min: 1,
              max: 1,
              desc: 'ORC - common order segment',
            },
            RQD: {
              idx: 1,
              min: 1,
              max: 1,
              desc: 'RQD - requisition detail segment',
            },
            RQ1: {
              idx: 2,
              max: 1,
              desc: 'RQ1 - requisition detail-1 segment',
            },
            NTE: {
              idx: 3,
              desc: 'NTE - notes and comments segment',
            },
          },
        },
      },
    },
  },
};

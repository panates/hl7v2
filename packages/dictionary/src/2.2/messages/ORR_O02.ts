import { HL7MessageDefinition } from '../../types.js';

export const ORR_O02: HL7MessageDefinition = {
  desc: 'Order response',
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
    NTE: {
      idx: 2,
      desc: 'Notes and comments',
    },
    PATIENT: {
      idx: 3,
      max: 1,
      desc: 'Patient',
      segments: {
        PID: {
          idx: 0,
          max: 1,
          desc: 'Patient identification',
        },
        NTE: {
          idx: 1,
          desc: 'Notes and comments',
        },
        ORDER: {
          idx: 2,
          min: 1,
          desc: 'Order',
          segments: {
            ORC: {
              idx: 0,
              min: 1,
              max: 1,
              desc: 'Commom order',
            },
            'OBR,RQD,RQ1,RXO,ODS,ODT': {
              idx: 1,
              desc: 'Details',
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

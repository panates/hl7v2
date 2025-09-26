import { HL7MessageDefinition } from '../../types.js';

export const ORR_O02: HL7MessageDefinition = {
  desc: 'Order response',
  segments: {
    MSA: {
      idx: 0,
      min: 1,
      max: 1,
      desc: 'Message Acknowledgment',
    },
    ERR: {
      idx: 1,
      desc: 'Error',
    },
    NTE: {
      idx: 2,
      desc: 'Notes and Comments (for Header)',
    },
    RESPONSE: {
      idx: 3,
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
              desc: 'Patient Identification',
            },
            NTE: {
              idx: 1,
              desc: 'Notes and Comments (for Patient ID)',
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
              desc: 'Common Order',
            },
            'OBR,RQD,RQ1,RXO,ODS,ODT': {
              idx: 1,
              desc: 'Details',
            },
            NTE: {
              idx: 2,
              desc: 'Notes and Comments (for Detail)',
            },
            CTI: {
              idx: 3,
              desc: 'Clinical Trial Identification',
            },
          },
        },
      },
    },
  },
};

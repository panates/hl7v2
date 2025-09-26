import { HL7MessageDefinition } from '../../types.js';

export const ORG_O20: HL7MessageDefinition = {
  desc: 'General clinical order response',
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
            OBR: {
              idx: 1,
              max: 1,
              desc: 'Observation request',
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
  },
};

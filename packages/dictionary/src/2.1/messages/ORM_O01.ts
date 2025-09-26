import { HL7MessageDefinition } from '../../types.js';

export const ORM_O01: HL7MessageDefinition = {
  desc: 'Order message',
  segments: {
    MSH: {
      idx: 0,
      min: 1,
      max: 1,
      desc: 'Message header',
    },
    NTE: {
      idx: 1,
      desc: 'Notes and comments',
    },
    PATIENT: {
      idx: 2,
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
        PV1: {
          idx: 2,
          max: 1,
          desc: 'Patient visit',
        },
      },
    },
    ORDER: {
      idx: 3,
      min: 1,
      desc: 'Order',
      segments: {
        ORC: {
          idx: 0,
          min: 1,
          max: 1,
          desc: 'Common order',
        },
        ORDER_DETAIL: {
          idx: 1,
          max: 1,
          desc: 'Order detail',
          segments: {
            'OBR,ORO,RX1': {
              idx: 0,
              desc: 'Details',
            },
            NTE: {
              idx: 1,
              desc: 'Notes and comments',
            },
            OBSERVATION: {
              idx: 2,
              desc: 'Observation',
              segments: {
                OBX: {
                  idx: 0,
                  min: 1,
                  max: 1,
                  desc: 'Observation/Result',
                },
                NTE: {
                  idx: 1,
                  desc: 'Notes and Comments (for Results)',
                },
              },
            },
          },
        },
        BLG: {
          idx: 2,
          max: 1,
          desc: 'Billing',
        },
      },
    },
  },
};

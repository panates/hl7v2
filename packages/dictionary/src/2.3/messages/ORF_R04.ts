import { HL7MessageDefinition } from '../../types.js';

export const ORF_R04: HL7MessageDefinition = {
  desc: 'Response to query; transmission of requested observation',
  segments: {
    MSH: {
      idx: 0,
      min: 1,
      max: 1,
      desc: 'Message header segment',
    },
    MSA: {
      idx: 1,
      min: 1,
      max: 1,
      desc: 'Message acknowledgement segment',
    },
    QRD: {
      idx: 2,
      min: 1,
      max: 1,
      desc: 'Query definition segment',
    },
    QRF: {
      idx: 3,
      max: 1,
      desc: 'Query filter segment',
    },
    QUERY_RESPONSE: {
      idx: 4,
      min: 1,
      desc: 'Query response',
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
              desc: 'Notes and comments segment',
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
              max: 1,
              desc: 'Common order segment',
            },
            OBR: {
              idx: 1,
              min: 1,
              max: 1,
              desc: 'Observation request segment',
            },
            NTE: {
              idx: 2,
              desc: 'Notes and comments segment',
            },
            OBSERVATION: {
              idx: 3,
              min: 1,
              desc: 'Observation',
              segments: {
                OBX: {
                  idx: 0,
                  max: 1,
                  desc: 'Observation segment',
                },
                NTE: {
                  idx: 1,
                  desc: 'Notes and comments segment',
                },
              },
            },
            CTI: {
              idx: 4,
              desc: 'Clinical trial identification',
            },
          },
        },
      },
    },
    DSC: {
      idx: 5,
      max: 1,
      desc: 'Continuation pointer segment',
    },
  },
};

import { HL7MessageDefinition } from '../../types.js';

export const ORF_R04: HL7MessageDefinition = {
  desc: 'Response to query; transmission of requested observation',
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
    QRD: {
      idx: 2,
      min: 1,
      max: 1,
      desc: 'Original-style query definition',
    },
    QRF: {
      idx: 3,
      max: 1,
      desc: 'Original style query filter',
    },
    RESPONSE: {
      idx: 4,
      min: 1,
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
              max: 1,
              desc: 'Common order',
            },
            OBR: {
              idx: 1,
              min: 1,
              max: 1,
              desc: 'Observation request',
            },
            NTE: {
              idx: 2,
              desc: 'Notes and comments',
            },
            CTD: {
              idx: 3,
              max: 1,
              desc: 'Contact data',
            },
            OBSERVATION: {
              idx: 4,
              min: 1,
              desc: 'Observation',
              segments: {
                OBX: {
                  idx: 0,
                  max: 1,
                  desc: 'Observation/result',
                },
                NTE: {
                  idx: 1,
                  desc: 'Notes and comments',
                },
              },
            },
            CTI: {
              idx: 5,
              desc: 'Clinical trial identification',
            },
          },
        },
      },
    },
    ERR: {
      idx: 5,
      max: 1,
      desc: 'Error',
    },
    QAK: {
      idx: 6,
      max: 1,
      desc: 'Query acknowledgment',
    },
    DSC: {
      idx: 7,
      max: 1,
      desc: 'Continuation pointer',
    },
  },
};

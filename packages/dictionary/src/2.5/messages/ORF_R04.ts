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
    SFT: {
      idx: 1,
      desc: 'Software segment',
    },
    MSA: {
      idx: 2,
      min: 1,
      max: 1,
      desc: 'Message acknowledgment',
    },
    QRD: {
      idx: 3,
      min: 1,
      max: 1,
      desc: 'Original-style query definition',
    },
    QRF: {
      idx: 4,
      max: 1,
      desc: 'Original style query filter',
    },
    QUERY_RESPONSE: {
      idx: 5,
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
            TIMING_QTY: {
              idx: 3,
              desc: 'Timing qty',
              segments: {
                TQ1: {
                  idx: 0,
                  min: 1,
                  max: 1,
                  desc: 'Timing/quantity',
                },
                TQ2: {
                  idx: 1,
                  desc: 'Timing/quantity relationship',
                },
              },
            },
            CTD: {
              idx: 4,
              max: 1,
              desc: 'Contact data',
            },
            OBSERVATION: {
              idx: 5,
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
              idx: 6,
              desc: 'Clinical trial identification',
            },
          },
        },
      },
    },
    ERR: {
      idx: 6,
      desc: 'Error',
    },
    QAK: {
      idx: 7,
      max: 1,
      desc: 'Query acknowledgment',
    },
    DSC: {
      idx: 8,
      max: 1,
      desc: 'Continuation pointer',
    },
  },
};

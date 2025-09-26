import { HL7MessageDefinition } from '../../types.js';

export const ORF_R04: HL7MessageDefinition = {
  desc: 'Response to query; transmission of requested observation',
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
    QRD: {
      idx: 2,
      min: 1,
      max: 1,
      desc: 'QRD - original-style query definition segment',
    },
    QRF: {
      idx: 3,
      max: 1,
      desc: 'QRF - original style query filter segment',
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
              max: 1,
              desc: 'ORC - common order segment',
            },
            OBR: {
              idx: 1,
              min: 1,
              max: 1,
              desc: 'OBR - observation request segment',
            },
            NTE: {
              idx: 2,
              desc: 'NTE - notes and comments segment',
            },
            OBSERVATION: {
              idx: 3,
              min: 1,
              desc: 'Observation',
              segments: {
                OBX: {
                  idx: 0,
                  max: 1,
                  desc: 'OBX - observation/result segment',
                },
                NTE: {
                  idx: 1,
                  desc: 'NTE - notes and comments segment',
                },
              },
            },
            CTI: {
              idx: 4,
              desc: 'CTI - clinical trial identification segment',
            },
          },
        },
      },
    },
    ERR: {
      idx: 5,
      max: 1,
      desc: 'ERR - error segment',
    },
    QAK: {
      idx: 6,
      max: 1,
      desc: 'Query Acknowledgement',
    },
    DSC: {
      idx: 7,
      max: 1,
      desc: 'DSC - Continuation pointer segment',
    },
  },
};

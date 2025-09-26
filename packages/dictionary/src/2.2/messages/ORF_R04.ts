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
    QUERY_RESPONSE: {
      idx: 2,
      min: 1,
      desc: 'Query response',
      segments: {
        QRD: {
          idx: 0,
          min: 1,
          max: 1,
          desc: 'Query definition',
        },
        QRF: {
          idx: 1,
          max: 1,
          desc: 'Query filter',
        },
        PID: {
          idx: 2,
          max: 1,
          desc: 'Patient identification',
        },
        NTE: {
          idx: 3,
          desc: 'Notes and comments',
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
          max: 1,
          desc: 'Commom order',
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
        OBSERVATION: {
          idx: 3,
          min: 1,
          desc: 'Observation',
          segments: {
            OBX: {
              idx: 0,
              max: 1,
              desc: 'Observation result',
            },
            NTE: {
              idx: 1,
              desc: 'Notes and comments',
            },
          },
        },
      },
    },
    DSC: {
      idx: 4,
      max: 1,
      desc: 'Continuation pointer',
    },
  },
};

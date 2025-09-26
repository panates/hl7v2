import { HL7MessageDefinition } from '../../types.js';

export const RSP_K22: HL7MessageDefinition = {
  desc: 'Segment pattern response',
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
    QAK: {
      idx: 3,
      min: 1,
      max: 1,
      desc: 'Query acknowledgment',
    },
    QPD: {
      idx: 4,
      min: 1,
      max: 1,
      desc: 'Query parameter definition',
    },
    QUERY_RESPONSE: {
      idx: 5,
      desc: 'Query response',
      segments: {
        PID: {
          idx: 0,
          min: 1,
          max: 1,
          desc: 'Patient identification',
        },
        PD1: {
          idx: 1,
          max: 1,
          desc: 'Patient additional demographic',
        },
        QRI: {
          idx: 2,
          max: 1,
          desc: 'Query response instance',
        },
      },
    },
    DSC: {
      idx: 6,
      max: 1,
      desc: 'Continuation pointer',
    },
  },
};

import { HL7MessageDefinition } from '../../types.js';

export const RSP_K22: HL7MessageDefinition = {
  desc: 'Segment pattern response',
  segments: {
    MSH: {
      idx: 0,
      min: 1,
      max: 1,
      desc: 'Message Header',
    },
    MSA: {
      idx: 1,
      min: 1,
      max: 1,
      desc: 'Message Acknowledgement',
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
      desc: 'Query Acknowledgement',
    },
    QPD: {
      idx: 4,
      min: 1,
      max: 1,
      desc: 'Query Parameter Definition Segment',
    },
    QUERY_RESPONSE: {
      idx: 5,
      desc: 'Query response',
      segments: {
        PID: {
          idx: 0,
          min: 1,
          max: 1,
          desc: 'Patient Identification',
        },
        PD1: {
          idx: 1,
          max: 1,
          desc: 'Additional Demographics',
        },
        QRI: {
          idx: 2,
          max: 1,
          desc: 'Query Response Instance',
        },
      },
    },
    DSC: {
      idx: 6,
      max: 1,
      desc: 'Continuation Pointer',
    },
  },
};

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
    SFT: {
      idx: 1,
      desc: 'Software Segment',
    },
    MSA: {
      idx: 2,
      min: 1,
      max: 1,
      desc: 'Message Acknowledgement',
    },
    ERR: {
      idx: 3,
      max: 1,
      desc: 'Error',
    },
    QAK: {
      idx: 4,
      min: 1,
      max: 1,
      desc: 'Query Acknowledgement',
    },
    QPD: {
      idx: 5,
      min: 1,
      max: 1,
      desc: 'Query Parameter Definition Segment',
    },
    QUERY_RESPONSE: {
      idx: 6,
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
        NK1: {
          idx: 2,
          desc: 'Next of Kin',
        },
        QRI: {
          idx: 3,
          max: 1,
          desc: 'Query Response Instance',
        },
      },
    },
    DSC: {
      idx: 7,
      max: 1,
      desc: 'Continuation Pointer',
    },
  },
};

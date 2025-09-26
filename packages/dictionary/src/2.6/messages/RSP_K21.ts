import { HL7MessageDefinition } from '../../types.js';

export const RSP_K21: HL7MessageDefinition = {
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
    UAC: {
      idx: 2,
      max: 1,
      desc: 'User Authentication Credential',
    },
    MSA: {
      idx: 3,
      min: 1,
      max: 1,
      desc: 'Message Acknowledgement',
    },
    ERR: {
      idx: 4,
      max: 1,
      desc: 'Error',
    },
    QAK: {
      idx: 5,
      min: 1,
      max: 1,
      desc: 'Query Acknowledgement',
    },
    QPD: {
      idx: 6,
      min: 1,
      max: 1,
      desc: 'Query Parameter Definition Segment',
    },
    QUERY_RESPONSE: {
      idx: 7,
      max: 1,
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
        ARV: {
          idx: 2,
          desc: 'Access Restrictions',
        },
        NK1: {
          idx: 3,
          desc: 'Next of Kin',
        },
        QRI: {
          idx: 4,
          min: 1,
          max: 1,
          desc: 'Query Response Instances',
        },
      },
    },
    DSC: {
      idx: 8,
      max: 1,
      desc: 'Continuation Pointer',
    },
  },
};

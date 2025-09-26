import { HL7MessageDefinition } from '../../types.js';

export const RSP_K24: HL7MessageDefinition = {
  desc: 'Segment Pattern Response',
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
      desc: 'Query Response',
      segments: {
        PID: {
          idx: 0,
          min: 1,
          max: 1,
          desc: 'Patient Identification',
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

import { HL7MessageDefinition } from '../../types.js';

export const VXQ_V01: HL7MessageDefinition = {
  desc: 'Query for vaccination record',
  segments: {
    MSH: {
      idx: 0,
      min: 1,
      max: 1,
      desc: 'Message Header Segment',
    },
    SFT: {
      idx: 1,
      desc: 'Software',
    },
    UAC: {
      idx: 2,
      max: 1,
      desc: 'User Authentication Credential',
    },
    QRD: {
      idx: 3,
      min: 1,
      max: 1,
      desc: 'Query Definition Segment',
    },
    QRF: {
      idx: 4,
      max: 1,
      desc: 'Query Filter Segment',
    },
  },
};

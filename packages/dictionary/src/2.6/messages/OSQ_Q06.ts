import { HL7MessageDefinition } from '../../types.js';

export const OSQ_Q06: HL7MessageDefinition = {
  desc: 'Query for order status',
  segments: {
    MSH: {
      idx: 0,
      min: 1,
      max: 1,
      desc: 'Message Header',
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
      desc: 'Query Definition',
    },
    QRF: {
      idx: 4,
      max: 1,
      desc: 'Query Filter',
    },
    DSC: {
      idx: 5,
      max: 1,
      desc: 'Continuation Pointer',
    },
  },
};

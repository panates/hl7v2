import { HL7MessageDefinition } from '../../types.js';

export const DSR_Q03: HL7MessageDefinition = {
  desc: 'Deferred response to a query',
  segments: {
    MSH: {
      idx: 0,
      min: 1,
      max: 1,
      desc: 'Message header segment',
    },
    MSA: {
      idx: 1,
      max: 1,
      desc: 'Message acknowledgement segment',
    },
    QRD: {
      idx: 2,
      min: 1,
      max: 1,
      desc: 'Query definition segment',
    },
    QRF: {
      idx: 3,
      max: 1,
      desc: 'Query filter segment',
    },
    DSP: {
      idx: 4,
      min: 1,
      desc: 'Display data segment',
    },
    DSC: {
      idx: 5,
      max: 1,
      desc: 'Continuation pointer segment',
    },
  },
};

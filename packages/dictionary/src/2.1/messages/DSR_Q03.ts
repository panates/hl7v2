import { HL7MessageDefinition } from '../../types.js';

export const DSR_Q03: HL7MessageDefinition = {
  desc: 'Deferred response to a query',
  segments: {
    MSH: {
      idx: 0,
      min: 1,
      max: 1,
      desc: 'Message header',
    },
    QRD: {
      idx: 1,
      min: 1,
      max: 1,
      desc: 'Query definition',
    },
    QRF: {
      idx: 2,
      max: 1,
      desc: 'Query filter',
    },
    DSP: {
      idx: 3,
      min: 1,
      desc: 'Display data',
    },
    DSC: {
      idx: 4,
      min: 1,
      max: 1,
      desc: 'Continuation pointer',
    },
  },
};

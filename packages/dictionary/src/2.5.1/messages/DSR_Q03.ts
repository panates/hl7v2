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
    SFT: {
      idx: 1,
      desc: 'Software segment',
    },
    MSA: {
      idx: 2,
      max: 1,
      desc: 'Message acknowledgment',
    },
    ERR: {
      idx: 3,
      max: 1,
      desc: 'Error',
    },
    QAK: {
      idx: 4,
      max: 1,
      desc: 'Query acknowledgment',
    },
    QRD: {
      idx: 5,
      min: 1,
      max: 1,
      desc: 'Original-style query definition',
    },
    QRF: {
      idx: 6,
      max: 1,
      desc: 'Original style query filter',
    },
    DSP: {
      idx: 7,
      min: 1,
      desc: 'Display data',
    },
    DSC: {
      idx: 8,
      max: 1,
      desc: 'Continuation pointer',
    },
  },
};

import { HL7MessageDefinition } from '../../types.js';

export const DSR_Q01: HL7MessageDefinition = {
  desc: 'Display response message',
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
      max: 1,
      desc: 'Query acknowledgment',
    },
    QRD: {
      idx: 4,
      min: 1,
      max: 1,
      desc: 'Original-style query definition',
    },
    QRF: {
      idx: 5,
      max: 1,
      desc: 'Original style query filter',
    },
    DSP: {
      idx: 6,
      min: 1,
      desc: 'Display data',
    },
    DSC: {
      idx: 7,
      max: 1,
      desc: 'Continuation pointer',
    },
  },
};

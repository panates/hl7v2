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
    QRD: {
      idx: 3,
      min: 1,
      max: 1,
      desc: 'Query definition',
    },
    QRF: {
      idx: 4,
      max: 1,
      desc: 'Query filter',
    },
    DSP: {
      idx: 5,
      min: 1,
      desc: 'Display data',
    },
    DSC: {
      idx: 6,
      max: 1,
      desc: 'Continuation pointer',
    },
  },
};

import { HL7MessageDefinition } from '../../types.js';

export const DSR_Q01: HL7MessageDefinition = {
  desc: 'Display response message',
  segments: {
    MSH: {
      idx: 0,
      min: 1,
      max: 1,
      desc: 'MSH - message header segment',
    },
    MSA: {
      idx: 1,
      min: 1,
      max: 1,
      desc: 'MSA - message acknowledgment segment',
    },
    ERR: {
      idx: 2,
      max: 1,
      desc: 'ERR - error segment',
    },
    QAK: {
      idx: 3,
      max: 1,
      desc: 'Query Acknowledgement',
    },
    QRD: {
      idx: 4,
      min: 1,
      max: 1,
      desc: 'QRD - original-style query definition segment',
    },
    QRF: {
      idx: 5,
      max: 1,
      desc: 'QRF - original style query filter segment',
    },
    DSP: {
      idx: 6,
      min: 1,
      desc: 'DSP - display data segment',
    },
    DSC: {
      idx: 7,
      max: 1,
      desc: 'DSC - Continuation pointer segment',
    },
  },
};

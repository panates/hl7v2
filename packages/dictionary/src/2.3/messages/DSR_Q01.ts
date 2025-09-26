import { HL7MessageDefinition } from '../../types.js';

export const DSR_Q01: HL7MessageDefinition = {
  desc: 'Display response message',
  segments: {
    MSH: {
      idx: 0,
      min: 1,
      max: 1,
      desc: 'Message header segment',
    },
    MSA: {
      idx: 1,
      min: 1,
      max: 1,
      desc: 'Message acknowledgement segment',
    },
    ERR: {
      idx: 2,
      max: 1,
      desc: 'Error segment',
    },
    QAK: {
      idx: 3,
      max: 1,
      desc: 'Query acknowledgement',
    },
    QRD: {
      idx: 4,
      min: 1,
      max: 1,
      desc: 'Query definition segment',
    },
    QRF: {
      idx: 5,
      max: 1,
      desc: 'Query filter segment',
    },
    DSP: {
      idx: 6,
      min: 1,
      desc: 'Display data segment',
    },
    DSC: {
      idx: 7,
      max: 1,
      desc: 'Continuation pointer segment',
    },
  },
};

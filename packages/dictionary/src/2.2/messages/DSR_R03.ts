import { HL7MessageDefinition } from '../../types.js';

export const DSR_R03: HL7MessageDefinition = {
  desc: 'Display response',
  segments: {
    MSH: {
      idx: 0,
      min: 1,
      max: 1,
      desc: 'Message header',
    },
    MSA: {
      idx: 1,
      max: 1,
      desc: 'Message acknowledgment',
    },
    QRD: {
      idx: 2,
      min: 1,
      max: 1,
      desc: 'Query definition',
    },
    QRF: {
      idx: 3,
      max: 1,
      desc: 'Query filter',
    },
    DSP: {
      idx: 4,
      min: 1,
      desc: 'Display data',
    },
    DSC: {
      idx: 5,
      max: 1,
      desc: 'Continuation pointer',
    },
  },
};

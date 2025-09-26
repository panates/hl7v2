import { HL7MessageDefinition } from '../../types.js';

export const QRY_Q01: HL7MessageDefinition = {
  desc: 'Query sent for immediate response',
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
      desc: 'Original-style query definition',
    },
    QRF: {
      idx: 2,
      max: 1,
      desc: 'Original style query filter',
    },
    DSC: {
      idx: 3,
      max: 1,
      desc: 'Continuation pointer',
    },
  },
};

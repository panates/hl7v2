import { HL7MessageDefinition } from '../../types.js';

export const QRY_Q02: HL7MessageDefinition = {
  desc: 'Query sent for deferred response',
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
    QRD: {
      idx: 2,
      min: 1,
      max: 1,
      desc: 'Original-style query definition',
    },
    QRF: {
      idx: 3,
      max: 1,
      desc: 'Original style query filter',
    },
    DSC: {
      idx: 4,
      max: 1,
      desc: 'Continuation pointer',
    },
  },
};

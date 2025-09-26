import { HL7MessageDefinition } from '../../types.js';

export const QRY: HL7MessageDefinition = {
  desc: 'Query',
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
  },
};

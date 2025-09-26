import { HL7MessageDefinition } from '../../types.js';

export const QRY_PCE: HL7MessageDefinition = {
  desc: 'Pathway (problem-oriented) query',
  segments: {
    MSH: {
      idx: 0,
      min: 1,
      max: 1,
      desc: 'MSH - message header segment',
    },
    QRD: {
      idx: 1,
      min: 1,
      max: 1,
      desc: 'QRD - original-style query definition segment',
    },
    QRF: {
      idx: 2,
      max: 1,
      desc: 'QRF - original style query filter segment',
    },
  },
};

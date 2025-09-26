import { HL7MessageDefinition } from '../../types.js';

export const QRY_T12: HL7MessageDefinition = {
  desc: 'Document query',
  segments: {
    MSH: {
      idx: 0,
      min: 1,
      max: 1,
      desc: 'Message header segment',
    },
    QRD: {
      idx: 1,
      min: 1,
      max: 1,
      desc: 'Query definition segment',
    },
    QRF: {
      idx: 2,
      max: 1,
      desc: 'Query filter segment',
    },
  },
};

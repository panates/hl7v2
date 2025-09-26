import { HL7MessageDefinition } from '../../types.js';

export const QRY_P04: HL7MessageDefinition = {
  desc: 'Generate bill and a/r statements',
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
      desc: 'Query definition',
    },
    QRF: {
      idx: 2,
      max: 1,
      desc: 'Query filter',
    },
    DSC: {
      idx: 3,
      max: 1,
      desc: 'Continuation pointer',
    },
  },
};

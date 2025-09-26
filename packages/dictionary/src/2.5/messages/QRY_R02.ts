import { HL7MessageDefinition } from '../../types.js';

export const QRY_R02: HL7MessageDefinition = {
  desc: 'Query for results of observation',
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
      min: 1,
      max: 1,
      desc: 'Original style query filter',
    },
  },
};

import { HL7MessageDefinition } from '../../types.js';

export const VXQ_V01: HL7MessageDefinition = {
  desc: 'Query for vaccination record',
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

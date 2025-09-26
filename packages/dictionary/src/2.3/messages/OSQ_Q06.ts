import { HL7MessageDefinition } from '../../types.js';

export const OSQ_Q06: HL7MessageDefinition = {
  desc: 'Query for order status',
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
    DSC: {
      idx: 3,
      max: 1,
      desc: 'Continuation pointer segment',
    },
  },
};

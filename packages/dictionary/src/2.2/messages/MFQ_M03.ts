import { HL7MessageDefinition } from '../../types.js';

export const MFQ_M03: HL7MessageDefinition = {
  desc: 'Query for master file record',
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

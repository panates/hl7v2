import { HL7MessageDefinition } from '../../types.js';

export const QRY_T12: HL7MessageDefinition = {
  desc: 'Document Query',
  segments: {
    MSH: {
      idx: 0,
      min: 1,
      max: 1,
      desc: 'Message Header',
    },
    QRD: {
      idx: 1,
      min: 1,
      max: 1,
      desc: 'Query Definition',
    },
    QRF: {
      idx: 2,
      max: 1,
      desc: 'Query Filter',
    },
  },
};

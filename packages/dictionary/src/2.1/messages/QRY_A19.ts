import { HL7MessageDefinition } from '../../types.js';

export const QRY_A19: HL7MessageDefinition = {
  desc: 'Patient query',
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
  },
};

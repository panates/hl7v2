import { HL7MessageDefinition } from '../../types.js';

export const QSB_Q16: HL7MessageDefinition = {
  desc: 'Create subscription',
  segments: {
    MSH: {
      idx: 0,
      min: 1,
      max: 1,
      desc: 'Message header',
    },
    QPD: {
      idx: 1,
      min: 1,
      max: 1,
      desc: 'Query parameter definition',
    },
    RCP: {
      idx: 2,
      min: 1,
      max: 1,
      desc: 'Response control parameter',
    },
    DSC: {
      idx: 3,
      max: 1,
      desc: 'Continuation pointer',
    },
  },
};

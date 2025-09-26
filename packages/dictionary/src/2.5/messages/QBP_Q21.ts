import { HL7MessageDefinition } from '../../types.js';

export const QBP_Q21: HL7MessageDefinition = {
  desc: 'Query by parameter',
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
    QPD: {
      idx: 2,
      min: 1,
      max: 1,
      desc: 'Query parameter definition',
    },
    RCP: {
      idx: 3,
      min: 1,
      max: 1,
      desc: 'Response control parameter',
    },
    DSC: {
      idx: 4,
      max: 1,
      desc: 'Continuation pointer',
    },
  },
};

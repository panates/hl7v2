import { HL7MessageDefinition } from '../../types.js';

export const QBP_Q13: HL7MessageDefinition = {
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
    RDF: {
      idx: 3,
      max: 1,
      desc: 'Table row definition',
    },
    RCP: {
      idx: 4,
      min: 1,
      max: 1,
      desc: 'Response control parameter',
    },
    DSC: {
      idx: 5,
      max: 1,
      desc: 'Continuation pointer',
    },
  },
};

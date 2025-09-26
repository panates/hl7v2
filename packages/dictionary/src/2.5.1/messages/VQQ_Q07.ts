import { HL7MessageDefinition } from '../../types.js';

export const VQQ_Q07: HL7MessageDefinition = {
  desc: 'Virtual table query',
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
    VTQ: {
      idx: 2,
      min: 1,
      max: 1,
      desc: 'Virtual table query request',
    },
    RDF: {
      idx: 3,
      max: 1,
      desc: 'Table row definition',
    },
    DSC: {
      idx: 4,
      max: 1,
      desc: 'Continuation pointer',
    },
  },
};

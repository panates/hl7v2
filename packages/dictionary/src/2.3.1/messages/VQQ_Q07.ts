import { HL7MessageDefinition } from '../../types.js';

export const VQQ_Q07: HL7MessageDefinition = {
  desc: 'Virtual table query',
  segments: {
    MSH: {
      idx: 0,
      min: 1,
      max: 1,
      desc: 'MSH - message header segment',
    },
    VTQ: {
      idx: 1,
      min: 1,
      max: 1,
      desc: 'VTQ - virtual table query request segment',
    },
    RDF: {
      idx: 2,
      max: 1,
      desc: 'RDF - table row definition segment',
    },
    DSC: {
      idx: 3,
      max: 1,
      desc: 'DSC - Continuation pointer segment',
    },
  },
};

import { HL7MessageDefinition } from '../../types.js';

export const VQQ_Q01: HL7MessageDefinition = {
  desc: 'Virtual table query',
  segments: {
    MSH: {
      idx: 0,
      min: 1,
      max: 1,
      desc: 'Message header segment',
    },
    VTQ: {
      idx: 1,
      min: 1,
      max: 1,
      desc: 'Virtual table query request',
    },
    RDF: {
      idx: 2,
      max: 1,
      desc: 'Table row definition',
    },
    DSC: {
      idx: 3,
      max: 1,
      desc: 'Continuation pointer segment',
    },
  },
};

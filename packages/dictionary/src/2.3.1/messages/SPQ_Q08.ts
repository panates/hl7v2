import { HL7MessageDefinition } from '../../types.js';

export const SPQ_Q08: HL7MessageDefinition = {
  desc: 'Stored procedure request',
  segments: {
    MSH: {
      idx: 0,
      min: 1,
      max: 1,
      desc: 'MSH - message header segment',
    },
    SPR: {
      idx: 1,
      min: 1,
      max: 1,
      desc: 'SPR - stored procedure request definition segment',
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

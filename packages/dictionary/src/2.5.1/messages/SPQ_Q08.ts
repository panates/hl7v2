import { HL7MessageDefinition } from '../../types.js';

export const SPQ_Q08: HL7MessageDefinition = {
  desc: 'Stored procedure request',
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
    SPR: {
      idx: 2,
      min: 1,
      max: 1,
      desc: 'Stored procedure request definition',
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

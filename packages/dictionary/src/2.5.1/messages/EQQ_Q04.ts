import { HL7MessageDefinition } from '../../types.js';

export const EQQ_Q04: HL7MessageDefinition = {
  desc: 'Embedded query language query',
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
    EQL: {
      idx: 2,
      min: 1,
      max: 1,
      desc: 'Embedded query language',
    },
    DSC: {
      idx: 3,
      max: 1,
      desc: 'Continuation pointer',
    },
  },
};

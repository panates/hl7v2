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
    EQL: {
      idx: 1,
      min: 1,
      max: 1,
      desc: 'Embedded query language',
    },
    DSC: {
      idx: 2,
      max: 1,
      desc: 'Continuation pointer',
    },
  },
};

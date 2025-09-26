import { HL7MessageDefinition } from '../../types.js';

export const EQQ_Q04: HL7MessageDefinition = {
  desc: 'Embedded query language query',
  segments: {
    MSH: {
      idx: 0,
      min: 1,
      max: 1,
      desc: 'MSH - message header segment',
    },
    EQL: {
      idx: 1,
      min: 1,
      max: 1,
      desc: 'EQL - embedded query language segment',
    },
    DSC: {
      idx: 2,
      max: 1,
      desc: 'DSC - Continuation pointer segment',
    },
  },
};

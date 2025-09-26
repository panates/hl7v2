import { HL7MessageDefinition } from '../../types.js';

export const RQQ_Q09: HL7MessageDefinition = {
  desc: 'Event replay query',
  segments: {
    MSH: {
      idx: 0,
      min: 1,
      max: 1,
      desc: 'MSH - message header segment',
    },
    ERQ: {
      idx: 1,
      min: 1,
      max: 1,
      desc: 'ERQ - event replay query segment',
    },
    DSC: {
      idx: 2,
      max: 1,
      desc: 'DSC - Continuation pointer segment',
    },
  },
};

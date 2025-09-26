import { HL7MessageDefinition } from '../../types.js';

export const RQQ_Q09: HL7MessageDefinition = {
  desc: 'Event replay query',
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
    ERQ: {
      idx: 2,
      min: 1,
      max: 1,
      desc: 'Event replay query',
    },
    DSC: {
      idx: 3,
      max: 1,
      desc: 'Continuation pointer',
    },
  },
};

import { HL7MessageDefinition } from '../../types.js';

export const ADT_A20: HL7MessageDefinition = {
  desc: 'Bed status update',
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
    EVN: {
      idx: 2,
      min: 1,
      max: 1,
      desc: 'Event type',
    },
    NPU: {
      idx: 3,
      min: 1,
      max: 1,
      desc: 'Bed status update',
    },
  },
};

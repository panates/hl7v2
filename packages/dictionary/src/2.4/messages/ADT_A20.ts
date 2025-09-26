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
    EVN: {
      idx: 1,
      min: 1,
      max: 1,
      desc: 'Event type',
    },
    NPU: {
      idx: 2,
      min: 1,
      max: 1,
      desc: 'Bed status update',
    },
  },
};

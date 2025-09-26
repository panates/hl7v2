import { HL7MessageDefinition } from '../../types.js';

export const ADT_A20: HL7MessageDefinition = {
  desc: 'Bed status update',
  segments: {
    MSH: {
      idx: 0,
      min: 1,
      max: 1,
      desc: 'MSH - message header segment',
    },
    EVN: {
      idx: 1,
      min: 1,
      max: 1,
      desc: 'EVN - event type segment',
    },
    NPU: {
      idx: 2,
      min: 1,
      max: 1,
      desc: 'NPU - bed status update segment',
    },
  },
};

import { HL7MessageDefinition } from '../../types.js';

export const MCF_Q02: HL7MessageDefinition = {
  desc: 'Delayed acknowledgment',
  segments: {
    MSH: {
      idx: 0,
      min: 1,
      max: 1,
      desc: 'Message header',
    },
    MSA: {
      idx: 1,
      min: 1,
      max: 1,
      desc: 'Message acknowledgment',
    },
  },
};

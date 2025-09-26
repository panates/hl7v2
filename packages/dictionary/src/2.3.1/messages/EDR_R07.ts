import { HL7MessageDefinition } from '../../types.js';

export const EDR_R07: HL7MessageDefinition = {
  desc: 'Enhanced display response',
  segments: {
    MSH: {
      idx: 0,
      min: 1,
      max: 1,
      desc: 'MSH - message header segment',
    },
    MSA: {
      idx: 1,
      min: 1,
      max: 1,
      desc: 'MSA - message acknowledgment segment',
    },
    ERR: {
      idx: 2,
      max: 1,
      desc: 'ERR - error segment',
    },
    QAK: {
      idx: 3,
      min: 1,
      max: 1,
      desc: 'Query Acknowledgement',
    },
    DSP: {
      idx: 4,
      min: 1,
      desc: 'DSP - display data segment',
    },
    DSC: {
      idx: 5,
      max: 1,
      desc: 'DSC - Continuation pointer segment',
    },
  },
};

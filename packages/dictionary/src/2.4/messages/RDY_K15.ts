import { HL7MessageDefinition } from '../../types.js';

export const RDY_K15: HL7MessageDefinition = {
  desc: 'Display based response',
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
    ERR: {
      idx: 2,
      max: 1,
      desc: 'Error',
    },
    QAK: {
      idx: 3,
      min: 1,
      max: 1,
      desc: 'Query acknowledgment',
    },
    QPD: {
      idx: 4,
      min: 1,
      max: 1,
      desc: 'Query parameter definition',
    },
    DSP: {
      idx: 5,
      desc: 'Display data',
    },
    DSC: {
      idx: 6,
      max: 1,
      desc: 'Continuation pointer',
    },
  },
};

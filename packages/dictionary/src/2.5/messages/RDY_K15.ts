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
    SFT: {
      idx: 1,
      desc: 'Software segment',
    },
    MSA: {
      idx: 2,
      min: 1,
      max: 1,
      desc: 'Message acknowledgment',
    },
    ERR: {
      idx: 3,
      max: 1,
      desc: 'Error',
    },
    QAK: {
      idx: 4,
      min: 1,
      max: 1,
      desc: 'Query acknowledgment',
    },
    QPD: {
      idx: 5,
      min: 1,
      max: 1,
      desc: 'Query parameter definition',
    },
    DSP: {
      idx: 6,
      desc: 'Display data',
    },
    DSC: {
      idx: 7,
      max: 1,
      desc: 'Continuation pointer',
    },
  },
};

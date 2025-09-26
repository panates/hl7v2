import { HL7MessageDefinition } from '../../types.js';

export const EDR_R07: HL7MessageDefinition = {
  desc: 'Enhanced display response',
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
    DSP: {
      idx: 5,
      min: 1,
      desc: 'Display data',
    },
    DSC: {
      idx: 6,
      max: 1,
      desc: 'Continuation pointer',
    },
  },
};

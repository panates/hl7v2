import { HL7MessageDefinition } from '../../types.js';

export const RPL_I02: HL7MessageDefinition = {
  desc: 'Return patient display list',
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
    PROVIDER: {
      idx: 3,
      min: 1,
      desc: 'Provider',
      segments: {
        PRD: {
          idx: 0,
          min: 1,
          max: 1,
          desc: 'Provider data',
        },
        CTD: {
          idx: 1,
          desc: 'Contact data',
        },
      },
    },
    NTE: {
      idx: 4,
      desc: 'Notes and comments',
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

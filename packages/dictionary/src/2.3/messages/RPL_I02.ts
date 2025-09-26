import { HL7MessageDefinition } from '../../types.js';

export const RPL_I02: HL7MessageDefinition = {
  desc: 'Return patient display list',
  segments: {
    MSH: {
      idx: 0,
      min: 1,
      max: 1,
      desc: 'Message header segment',
    },
    MSA: {
      idx: 1,
      min: 1,
      max: 1,
      desc: 'Message acknowledgement segment',
    },
    PROVIDER: {
      idx: 2,
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
      idx: 3,
      desc: 'Notes and comments segment',
    },
    DSP: {
      idx: 4,
      desc: 'Display data segment',
    },
    DSC: {
      idx: 5,
      max: 1,
      desc: 'Continuation pointer segment',
    },
  },
};

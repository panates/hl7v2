import { HL7MessageDefinition } from '../../types.js';

export const RPL_I02: HL7MessageDefinition = {
  desc: 'Return patient display list',
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
    PROVIDER: {
      idx: 2,
      min: 1,
      desc: 'Provider',
      segments: {
        PRD: {
          idx: 0,
          min: 1,
          max: 1,
          desc: 'Provider Data',
        },
        CTD: {
          idx: 1,
          desc: 'Contact Data',
        },
      },
    },
    NTE: {
      idx: 3,
      desc: 'NTE - notes and comments segment',
    },
    DSP: {
      idx: 4,
      desc: 'DSP - display data segment',
    },
    DSC: {
      idx: 5,
      max: 1,
      desc: 'DSC - Continuation pointer segment',
    },
  },
};

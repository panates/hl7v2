import { HL7MessageDefinition } from '../../types.js';

export const RPR_I03: HL7MessageDefinition = {
  desc: 'Return patient list',
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
    PID: {
      idx: 3,
      desc: 'Patient identification',
    },
    NTE: {
      idx: 4,
      desc: 'Notes and comments segment',
    },
  },
};

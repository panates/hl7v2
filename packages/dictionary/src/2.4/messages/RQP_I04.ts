import { HL7MessageDefinition } from '../../types.js';

export const RQP_I04: HL7MessageDefinition = {
  desc: 'Request patient demographics',
  segments: {
    MSH: {
      idx: 0,
      min: 1,
      max: 1,
      desc: 'Message header',
    },
    PROVIDER: {
      idx: 1,
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
      idx: 2,
      min: 1,
      max: 1,
      desc: 'Patient identification',
    },
    NK1: {
      idx: 3,
      desc: 'Next of kin / associated parties',
    },
    GT1: {
      idx: 4,
      desc: 'Guarantor',
    },
    NTE: {
      idx: 5,
      desc: 'Notes and comments',
    },
  },
};

import { HL7MessageDefinition } from '../../types.js';

export const RPR_I03: HL7MessageDefinition = {
  desc: 'Return patient list',
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
    PID: {
      idx: 3,
      desc: 'PID - patient identification segment',
    },
    NTE: {
      idx: 4,
      desc: 'NTE - notes and comments segment',
    },
  },
};

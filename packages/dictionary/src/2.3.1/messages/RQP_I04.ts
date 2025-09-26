import { HL7MessageDefinition } from '../../types.js';

export const RQP_I04: HL7MessageDefinition = {
  desc: 'Request patient demographics',
  segments: {
    MSH: {
      idx: 0,
      min: 1,
      max: 1,
      desc: 'MSH - message header segment',
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
          desc: 'Provider Data',
        },
        CTD: {
          idx: 1,
          desc: 'Contact Data',
        },
      },
    },
    PID: {
      idx: 2,
      min: 1,
      max: 1,
      desc: 'PID - patient identification segment',
    },
    NK1: {
      idx: 3,
      desc: 'NK1 - next of kin / associated parties segment-',
    },
    GT1: {
      idx: 4,
      desc: 'GT1 - guarantor segment',
    },
    NTE: {
      idx: 5,
      desc: 'NTE - notes and comments segment',
    },
  },
};

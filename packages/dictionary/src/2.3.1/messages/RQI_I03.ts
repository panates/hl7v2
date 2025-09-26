import { HL7MessageDefinition } from '../../types.js';

export const RQI_I03: HL7MessageDefinition = {
  desc: 'Request/receipt of patient selection list',
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
    GUARANTOR_INSURANCE: {
      idx: 4,
      max: 1,
      desc: 'Guarantor insurance',
      segments: {
        GT1: {
          idx: 0,
          desc: 'GT1 - guarantor segment',
        },
        INSURANCE: {
          idx: 1,
          min: 1,
          desc: 'Insurance',
          segments: {
            IN1: {
              idx: 0,
              min: 1,
              max: 1,
              desc: 'IN1 - insurance segment',
            },
            IN2: {
              idx: 1,
              max: 1,
              desc: 'IN2 - insurance additional information segment',
            },
            IN3: {
              idx: 2,
              max: 1,
              desc: 'IN3 - insurance additional information, certification segment',
            },
          },
        },
      },
    },
    NTE: {
      idx: 5,
      desc: 'NTE - notes and comments segment',
    },
  },
};

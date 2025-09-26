import { HL7MessageDefinition } from '../../types.js';

export const RPI_I01: HL7MessageDefinition = {
  desc: 'Return Patient Information',
  segments: {
    MSH: {
      idx: 0,
      min: 1,
      max: 1,
      desc: 'Message Header',
    },
    SFT: {
      idx: 1,
      desc: 'Software segment',
    },
    UAC: {
      idx: 2,
      max: 1,
      desc: 'User Authentication Credential',
    },
    MSA: {
      idx: 3,
      min: 1,
      max: 1,
      desc: 'Message Acknowledgment',
    },
    PROVIDER: {
      idx: 4,
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
      idx: 5,
      min: 1,
      max: 1,
      desc: 'Patient Identification',
    },
    NK1: {
      idx: 6,
      desc: 'Next of Kin/Associated Parties',
    },
    GUARANTOR_INSURANCE: {
      idx: 7,
      max: 1,
      desc: 'Guarantor Insurance',
      segments: {
        GT1: {
          idx: 0,
          desc: 'Guarantor',
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
              desc: 'Insurance',
            },
            IN2: {
              idx: 1,
              max: 1,
              desc: 'Insurance Additional Info',
            },
            IN3: {
              idx: 2,
              max: 1,
              desc: "Insurance Add'l Info - Cert",
            },
          },
        },
      },
    },
    NTE: {
      idx: 8,
      desc: 'Notes and Comments',
    },
  },
};

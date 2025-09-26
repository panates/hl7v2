import { HL7MessageDefinition } from '../../types.js';

export const RPI_I01: HL7MessageDefinition = {
  desc: 'Return patient information',
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
      min: 1,
      max: 1,
      desc: 'Patient identification',
    },
    NK1: {
      idx: 4,
      desc: 'Next of kin',
    },
    GUARANTOR_INSURANCE: {
      idx: 5,
      max: 1,
      desc: 'Guarantor insurance',
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
              desc: 'Insurance additional info',
            },
            IN3: {
              idx: 2,
              max: 1,
              desc: 'Insurance additional info - certification',
            },
          },
        },
      },
    },
    NTE: {
      idx: 6,
      desc: 'Notes and comments segment',
    },
  },
};

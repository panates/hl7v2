import { HL7MessageDefinition } from '../../types.js';

export const RQC_I05: HL7MessageDefinition = {
  desc: 'Request for patient clinical information',
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
    QRD: {
      idx: 2,
      min: 1,
      max: 1,
      desc: 'Original-style query definition',
    },
    QRF: {
      idx: 3,
      max: 1,
      desc: 'Original style query filter',
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
          desc: 'Provider data',
        },
        CTD: {
          idx: 1,
          desc: 'Contact data',
        },
      },
    },
    PID: {
      idx: 5,
      min: 1,
      max: 1,
      desc: 'Patient identification',
    },
    NK1: {
      idx: 6,
      desc: 'Next of kin / associated parties',
    },
    GT1: {
      idx: 7,
      desc: 'Guarantor',
    },
    NTE: {
      idx: 8,
      desc: 'Notes and comments',
    },
  },
};

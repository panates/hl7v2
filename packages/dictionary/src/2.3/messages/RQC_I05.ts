import { HL7MessageDefinition } from '../../types.js';

export const RQC_I05: HL7MessageDefinition = {
  desc: 'Request for patient clinical information',
  segments: {
    MSH: {
      idx: 0,
      min: 1,
      max: 1,
      desc: 'Message header segment',
    },
    QRD: {
      idx: 1,
      min: 1,
      max: 1,
      desc: 'Query definition segment',
    },
    QRF: {
      idx: 2,
      max: 1,
      desc: 'Query filter segment',
    },
    PROVIDER: {
      idx: 3,
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
      idx: 4,
      min: 1,
      max: 1,
      desc: 'Patient identification',
    },
    NK1: {
      idx: 5,
      desc: 'Next of kin',
    },
    GT1: {
      idx: 6,
      desc: 'Guarantor',
    },
    NTE: {
      idx: 7,
      desc: 'Notes and comments segment',
    },
  },
};

import { HL7MessageDefinition } from '../../types.js';

export const RCL_I06: HL7MessageDefinition = {
  desc: 'Return clinical information',
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
    MSA: {
      idx: 2,
      min: 1,
      max: 1,
      desc: 'Message acknowledgment',
    },
    QRD: {
      idx: 3,
      min: 1,
      max: 1,
      desc: 'Original-style query definition',
    },
    QRF: {
      idx: 4,
      max: 1,
      desc: 'Original style query filter',
    },
    PROVIDER: {
      idx: 5,
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
      idx: 6,
      min: 1,
      max: 1,
      desc: 'Patient identification',
    },
    DG1: {
      idx: 7,
      desc: 'Diagnosis',
    },
    DRG: {
      idx: 8,
      desc: 'Diagnosis related group',
    },
    AL1: {
      idx: 9,
      desc: 'Patient allergy information',
    },
    NTE: {
      idx: 10,
      desc: 'Notes and comments',
    },
    DSP: {
      idx: 11,
      desc: 'Display data',
    },
    DSC: {
      idx: 12,
      max: 1,
      desc: 'Continuation pointer',
    },
  },
};

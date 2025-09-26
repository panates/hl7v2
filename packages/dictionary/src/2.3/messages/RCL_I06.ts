import { HL7MessageDefinition } from '../../types.js';

export const RCL_I06: HL7MessageDefinition = {
  desc: 'Return clinical information',
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
    QRD: {
      idx: 2,
      min: 1,
      max: 1,
      desc: 'Query definition segment',
    },
    QRF: {
      idx: 3,
      max: 1,
      desc: 'Query filter segment',
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
    DG1: {
      idx: 6,
      desc: 'Diagnosis',
    },
    DRG: {
      idx: 7,
      desc: 'Diagnosis related group',
    },
    AL1: {
      idx: 8,
      desc: 'Patient allergy information',
    },
    NTE: {
      idx: 9,
      desc: 'Notes and comments segment',
    },
    DSP: {
      idx: 10,
      desc: 'Display data segment',
    },
    DSC: {
      idx: 11,
      max: 1,
      desc: 'Continuation pointer segment',
    },
  },
};

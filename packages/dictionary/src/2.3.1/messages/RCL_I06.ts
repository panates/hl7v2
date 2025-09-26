import { HL7MessageDefinition } from '../../types.js';

export const RCL_I06: HL7MessageDefinition = {
  desc: 'Return clinical information',
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
    QRD: {
      idx: 2,
      min: 1,
      max: 1,
      desc: 'QRD - original-style query definition segment',
    },
    QRF: {
      idx: 3,
      max: 1,
      desc: 'QRF - original style query filter segment',
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
      desc: 'PID - patient identification segment',
    },
    DG1: {
      idx: 6,
      desc: 'DG1 - diagnosis segment',
    },
    DRG: {
      idx: 7,
      desc: 'DRG - diagnosis related group segment',
    },
    AL1: {
      idx: 8,
      desc: 'AL1 - patient allergy information segment',
    },
    NTE: {
      idx: 9,
      desc: 'NTE - notes and comments segment',
    },
    DSP: {
      idx: 10,
      desc: 'DSP - display data segment',
    },
    DSC: {
      idx: 11,
      max: 1,
      desc: 'DSC - Continuation pointer segment',
    },
  },
};

import { HL7MessageDefinition } from '../../types.js';

export const RCL_I06: HL7MessageDefinition = {
  desc: 'Return clinical information',
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
    QRD: {
      idx: 4,
      min: 1,
      max: 1,
      desc: 'Query Definition',
    },
    QRF: {
      idx: 5,
      max: 1,
      desc: 'Query Filter',
    },
    PROVIDER: {
      idx: 6,
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
      idx: 7,
      min: 1,
      max: 1,
      desc: 'Patient Identification',
    },
    DG1: {
      idx: 8,
      desc: 'Diagnosis',
    },
    DRG: {
      idx: 9,
      desc: 'Diagnosis Related Group',
    },
    AL1: {
      idx: 10,
      desc: 'Allergy Information',
    },
    NTE: {
      idx: 11,
      desc: 'Notes and Comments',
    },
    DSP: {
      idx: 12,
      desc: 'Display Data',
    },
    DSC: {
      idx: 13,
      max: 1,
      desc: 'Continuation Pointer',
    },
  },
};

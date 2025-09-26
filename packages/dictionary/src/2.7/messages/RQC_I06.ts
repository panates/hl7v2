import { HL7MessageDefinition } from '../../types.js';

export const RQC_I06: HL7MessageDefinition = {
  desc: 'Request/Receipt of Clinical Data Listing',
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
    QRD: {
      idx: 3,
      min: 1,
      max: 1,
      desc: 'Query Definition',
    },
    QRF: {
      idx: 4,
      max: 1,
      desc: 'Query Filter',
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
          desc: 'Provider Data',
        },
        CTD: {
          idx: 1,
          desc: 'Contact Data',
        },
      },
    },
    PID: {
      idx: 6,
      min: 1,
      max: 1,
      desc: 'Patient Identification3',
    },
    NK1: {
      idx: 7,
      desc: 'Next of Kin/Associated parties',
    },
    GT1: {
      idx: 8,
      max: 1,
      desc: 'Guarantor',
    },
    NTE: {
      idx: 9,
      desc: 'Notes and Comments',
    },
  },
};

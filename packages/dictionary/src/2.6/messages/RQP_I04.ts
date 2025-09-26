import { HL7MessageDefinition } from '../../types.js';

export const RQP_I04: HL7MessageDefinition = {
  desc: 'Request patient demographics',
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
    PROVIDER: {
      idx: 3,
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
      idx: 4,
      min: 1,
      max: 1,
      desc: 'Patient Identification',
    },
    NK1: {
      idx: 5,
      desc: 'Next of Kin/Associated Parties',
    },
    GT1: {
      idx: 6,
      desc: 'Guarantor',
    },
    NTE: {
      idx: 7,
      desc: 'Notes and Comments',
    },
  },
};

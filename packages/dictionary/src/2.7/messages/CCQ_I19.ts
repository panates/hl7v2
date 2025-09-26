import { HL7MessageDefinition } from '../../types.js';

export const CCQ_I19: HL7MessageDefinition = {
  desc: 'Collaborative Care Referral',
  segments: {
    MSH: {
      idx: 0,
      min: 1,
      max: 1,
      desc: 'Message Header',
    },
    SFT: {
      idx: 1,
      desc: 'Software Segment',
    },
    UAC: {
      idx: 2,
      max: 1,
      desc: 'User Authentication Credential',
    },
    RF1: {
      idx: 3,
      min: 1,
      max: 1,
      desc: 'Referral Information',
    },
    PROVIDER_CONTACT: {
      idx: 4,
      desc: 'Provider Contact',
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
    REL: {
      idx: 5,
      desc: 'Relationship',
    },
  },
};

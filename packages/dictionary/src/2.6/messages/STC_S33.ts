import { HL7MessageDefinition } from '../../types.js';

export const STC_S33: HL7MessageDefinition = {
  desc: 'Notification of Sterilization Configuration',
  segments: {
    MSH: {
      idx: 0,
      min: 1,
      max: 1,
      desc: 'Message Header',
    },
    SFT: {
      idx: 1,
      desc: 'Software',
    },
    UAC: {
      idx: 2,
      max: 1,
      desc: 'User Authentication Credential Segment',
    },
    SCP: {
      idx: 3,
      min: 1,
      desc: 'Sterilization Configuration',
    },
  },
};

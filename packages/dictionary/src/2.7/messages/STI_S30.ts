import { HL7MessageDefinition } from '../../types.js';

export const STI_S30: HL7MessageDefinition = {
  desc: 'Sterilization Item Request',
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
    SLT: {
      idx: 3,
      min: 1,
      desc: 'Sterilization Lot',
    },
  },
};

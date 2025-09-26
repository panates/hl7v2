import { HL7MessageDefinition } from '../../types.js';

export const EHC_E24: HL7MessageDefinition = {
  desc: 'Authorization Response',
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
      desc: 'User Authentication Credential',
    },
    MSA: {
      idx: 3,
      min: 1,
      max: 1,
      desc: 'Message Acknowledgement',
    },
    ERR: {
      idx: 4,
      desc: 'Error',
    },
    IVC: {
      idx: 5,
      desc: 'Authorization Response Info',
    },
  },
};

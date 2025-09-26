import { HL7MessageDefinition } from '../../types.js';

export const LSR_U13: HL7MessageDefinition = {
  desc: 'Equipment Log/Service Message',
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
    EQU: {
      idx: 3,
      min: 1,
      max: 1,
      desc: 'Equipment Detail',
    },
    EQP: {
      idx: 4,
      min: 1,
      desc: 'Equipment Log/Service',
    },
    ROL: {
      idx: 5,
      max: 1,
      desc: 'Role Detail',
    },
  },
};

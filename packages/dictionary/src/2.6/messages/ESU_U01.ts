import { HL7MessageDefinition } from '../../types.js';

export const ESU_U01: HL7MessageDefinition = {
  desc: 'Automated equipment status update',
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
    ISD: {
      idx: 4,
      desc: 'Interaction Status Detail',
    },
    ROL: {
      idx: 5,
      max: 1,
      desc: 'Role Detail',
    },
  },
};

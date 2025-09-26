import { HL7MessageDefinition } from '../../types.js';

export const ESU_U01: HL7MessageDefinition = {
  desc: 'Automated equipment status update',
  segments: {
    MSH: {
      idx: 0,
      min: 1,
      max: 1,
      desc: 'Message header',
    },
    SFT: {
      idx: 1,
      desc: 'Software segment',
    },
    EQU: {
      idx: 2,
      min: 1,
      max: 1,
      desc: 'Equipment detail',
    },
    ISD: {
      idx: 3,
      desc: 'Interaction status detail',
    },
    ROL: {
      idx: 4,
      max: 1,
      desc: 'Role',
    },
  },
};

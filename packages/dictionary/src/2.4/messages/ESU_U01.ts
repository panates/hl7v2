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
    EQU: {
      idx: 1,
      min: 1,
      max: 1,
      desc: 'Equipment detail',
    },
    ISD: {
      idx: 2,
      desc: 'Interaction status detail',
    },
    ROL: {
      idx: 3,
      max: 1,
      desc: 'Role',
    },
  },
};

import { HL7MessageDefinition } from '../../types.js';

export const ESR_U02: HL7MessageDefinition = {
  desc: 'Automated equipment status request',
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
    ROL: {
      idx: 2,
      max: 1,
      desc: 'Role',
    },
  },
};

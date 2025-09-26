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
    ROL: {
      idx: 3,
      max: 1,
      desc: 'Role',
    },
  },
};

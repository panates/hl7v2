import { HL7MessageDefinition } from '../../types.js';

export const SSR_U04: HL7MessageDefinition = {
  desc: 'Specimen status request',
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
    SAC: {
      idx: 2,
      min: 1,
      desc: 'Specimen and container detail',
    },
    ROL: {
      idx: 3,
      max: 1,
      desc: 'Role',
    },
  },
};

import { HL7MessageDefinition } from '../../types.js';

export const INU_U05: HL7MessageDefinition = {
  desc: 'Automated equipment inventory update',
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
    INV: {
      idx: 2,
      min: 1,
      desc: 'Inventory detail',
    },
    ROL: {
      idx: 3,
      max: 1,
      desc: 'Role',
    },
  },
};

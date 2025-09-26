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
    INV: {
      idx: 3,
      min: 1,
      desc: 'Inventory detail',
    },
    ROL: {
      idx: 4,
      max: 1,
      desc: 'Role',
    },
  },
};

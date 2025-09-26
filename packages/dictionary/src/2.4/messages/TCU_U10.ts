import { HL7MessageDefinition } from '../../types.js';

export const TCU_U10: HL7MessageDefinition = {
  desc: 'Automated equipment test code settings update',
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
    TCC: {
      idx: 2,
      min: 1,
      desc: 'Test code configuration',
    },
    ROL: {
      idx: 3,
      max: 1,
      desc: 'Role',
    },
  },
};

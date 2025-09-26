import { HL7MessageDefinition } from '../../types.js';

export const LSU_U12: HL7MessageDefinition = {
  desc: 'Automated equipment log/service update',
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
    EQP: {
      idx: 2,
      min: 1,
      desc: 'Equipment/log service',
    },
    ROL: {
      idx: 3,
      max: 1,
      desc: 'Role',
    },
  },
};

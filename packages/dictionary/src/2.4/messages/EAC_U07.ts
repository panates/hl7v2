import { HL7MessageDefinition } from '../../types.js';

export const EAC_U07: HL7MessageDefinition = {
  desc: 'Automated equipment command',
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
    ECD: {
      idx: 2,
      min: 1,
      desc: 'Equipment command',
    },
    SAC: {
      idx: 3,
      max: 1,
      desc: 'Specimen and container detail',
    },
    CNS: {
      idx: 4,
      max: 1,
      desc: 'Clear notification',
    },
    ROL: {
      idx: 5,
      max: 1,
      desc: 'Role',
    },
  },
};

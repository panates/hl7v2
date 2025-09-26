import { HL7MessageDefinition } from '../../types.js';

export const SSU_U03: HL7MessageDefinition = {
  desc: 'Specimen status update',
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
    SPECIMEN_CONTAINER: {
      idx: 2,
      min: 1,
      desc: 'Specimen container',
      segments: {
        SAC: {
          idx: 0,
          min: 1,
          max: 1,
          desc: 'Specimen and container detail',
        },
        OBX: {
          idx: 1,
          max: 1,
          desc: 'Observation/result',
        },
      },
    },
    ROL: {
      idx: 3,
      max: 1,
      desc: 'Role',
    },
  },
};

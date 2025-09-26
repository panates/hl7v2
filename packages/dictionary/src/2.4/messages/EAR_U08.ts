import { HL7MessageDefinition } from '../../types.js';

export const EAR_U08: HL7MessageDefinition = {
  desc: 'Automated equipment response',
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
    COMMAND_RESPONSE: {
      idx: 2,
      min: 1,
      desc: 'Command response',
      segments: {
        ECD: {
          idx: 0,
          min: 1,
          max: 1,
          desc: 'Equipment command',
        },
        SAC: {
          idx: 1,
          max: 1,
          desc: 'Specimen and container detail',
        },
        ECR: {
          idx: 2,
          min: 1,
          max: 1,
          desc: 'Equipment command response',
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

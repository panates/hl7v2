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
    COMMAND_RESPONSE: {
      idx: 3,
      min: 1,
      desc: 'Command response',
      segments: {
        ECD: {
          idx: 0,
          min: 1,
          max: 1,
          desc: 'Equipment command',
        },
        SPECIMEN_CONTAINER: {
          idx: 1,
          max: 1,
          desc: 'Specimen container',
          segments: {
            SAC: {
              idx: 0,
              min: 1,
              max: 1,
              desc: 'Specimen container detail',
            },
            SPM: {
              idx: 1,
              desc: 'Specimen',
            },
          },
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
      idx: 4,
      max: 1,
      desc: 'Role',
    },
  },
};

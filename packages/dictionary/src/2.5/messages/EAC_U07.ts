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
    COMMAND: {
      idx: 3,
      min: 1,
      desc: 'Command',
      segments: {
        ECD: {
          idx: 0,
          min: 1,
          max: 1,
          desc: 'Equipment command',
        },
        TQ1: {
          idx: 1,
          max: 1,
          desc: 'Timing/quantity',
        },
        SPECIMEN_CONTAINER: {
          idx: 2,
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
        CNS: {
          idx: 3,
          max: 1,
          desc: 'Clear notification',
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

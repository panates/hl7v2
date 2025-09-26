import { HL7MessageDefinition } from '../../types.js';

export const EAC_U07: HL7MessageDefinition = {
  desc: 'Automated equipment command',
  segments: {
    MSH: {
      idx: 0,
      min: 1,
      max: 1,
      desc: 'Message Header',
    },
    SFT: {
      idx: 1,
      desc: 'Software Segment',
    },
    UAC: {
      idx: 2,
      max: 1,
      desc: 'User Authentication Credential',
    },
    EQU: {
      idx: 3,
      min: 1,
      max: 1,
      desc: 'Equipment Detail',
    },
    COMMAND: {
      idx: 4,
      min: 1,
      desc: 'Command',
      segments: {
        ECD: {
          idx: 0,
          min: 1,
          max: 1,
          desc: 'Equipment Command Detail',
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
              desc: 'Specimen Container Detail',
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
          desc: 'Clear Notification',
        },
      },
    },
    ROL: {
      idx: 5,
      max: 1,
      desc: 'Role Detail',
    },
  },
};

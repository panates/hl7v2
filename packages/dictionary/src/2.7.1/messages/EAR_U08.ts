import { HL7MessageDefinition } from '../../types.js';

export const EAR_U08: HL7MessageDefinition = {
  desc: 'Equipment Command Message',
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
    COMMAND_RESPONSE: {
      idx: 4,
      min: 1,
      desc: 'Command Response',
      segments: {
        ECD: {
          idx: 0,
          min: 1,
          max: 1,
          desc: 'Equipment Command Detail',
        },
        SPECIMEN_CONTAINER: {
          idx: 1,
          max: 1,
          desc: 'Specimen Container',
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
        ECR: {
          idx: 2,
          min: 1,
          max: 1,
          desc: 'Equipment Command Response',
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

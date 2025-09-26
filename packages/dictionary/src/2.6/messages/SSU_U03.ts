import { HL7MessageDefinition } from '../../types.js';

export const SSU_U03: HL7MessageDefinition = {
  desc: 'Specimen status update',
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
    SPECIMEN_CONTAINER: {
      idx: 4,
      min: 1,
      desc: 'Specimen container',
      segments: {
        SAC: {
          idx: 0,
          min: 1,
          max: 1,
          desc: 'Specimen Container Detail',
        },
        OBX: {
          idx: 1,
          desc: 'Additional specimen characteristics',
        },
        SPECIMEN: {
          idx: 2,
          desc: 'Specimen',
          segments: {
            SPM: {
              idx: 0,
              min: 1,
              max: 1,
              desc: 'Specimen',
            },
            OBX: {
              idx: 1,
              desc: 'Specimen related observation',
            },
          },
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

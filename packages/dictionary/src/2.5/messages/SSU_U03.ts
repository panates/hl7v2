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
    SPECIMEN_CONTAINER: {
      idx: 3,
      min: 1,
      desc: 'Specimen container',
      segments: {
        SAC: {
          idx: 0,
          min: 1,
          max: 1,
          desc: 'Specimen container detail',
        },
        OBX: {
          idx: 1,
          desc: 'Observation/result',
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
              desc: 'Observation/result',
            },
          },
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

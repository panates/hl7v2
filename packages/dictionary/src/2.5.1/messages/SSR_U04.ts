import { HL7MessageDefinition } from '../../types.js';

export const SSR_U04: HL7MessageDefinition = {
  desc: 'Specimen status request',
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
        SPM: {
          idx: 1,
          desc: 'Specimen',
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

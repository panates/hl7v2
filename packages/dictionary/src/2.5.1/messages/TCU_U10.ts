import { HL7MessageDefinition } from '../../types.js';

export const TCU_U10: HL7MessageDefinition = {
  desc: 'Automated equipment test code settings update',
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
    TEST_CONFIGURATION: {
      idx: 3,
      min: 1,
      desc: 'Test configuration',
      segments: {
        SPM: {
          idx: 0,
          max: 1,
          desc: 'Specimen',
        },
        TCC: {
          idx: 1,
          min: 1,
          desc: 'Test code configuration',
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

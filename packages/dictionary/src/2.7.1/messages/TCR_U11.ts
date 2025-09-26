import { HL7MessageDefinition } from '../../types.js';

export const TCR_U11: HL7MessageDefinition = {
  desc: 'Test Code Settings Request',
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
    TEST_CONFIGURATION: {
      idx: 4,
      min: 1,
      desc: 'Test Configuration',
      segments: {
        SPM: {
          idx: 0,
          max: 1,
          desc: 'Specimen',
        },
        TCC: {
          idx: 1,
          min: 1,
          desc: 'Test Code Configuration',
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

import { HL7MessageDefinition } from '../../types.js';

export const BAR_P12: HL7MessageDefinition = {
  desc: 'Update diagnose/procedure',
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
    EVN: {
      idx: 2,
      min: 1,
      max: 1,
      desc: 'Event type',
    },
    PID: {
      idx: 3,
      min: 1,
      max: 1,
      desc: 'Patient identification',
    },
    PV1: {
      idx: 4,
      min: 1,
      max: 1,
      desc: 'Patient visit',
    },
    DG1: {
      idx: 5,
      desc: 'Diagnosis',
    },
    DRG: {
      idx: 6,
      max: 1,
      desc: 'Diagnosis related group',
    },
    PROCEDURE: {
      idx: 7,
      desc: 'Procedure',
      segments: {
        PR1: {
          idx: 0,
          min: 1,
          max: 1,
          desc: 'Procedures',
        },
        ROL: {
          idx: 1,
          desc: 'Role',
        },
      },
    },
  },
};

import { HL7MessageDefinition } from '../../types.js';

export const BAR_P12: HL7MessageDefinition = {
  desc: 'Update diagnose/procedure',
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
    EVN: {
      idx: 3,
      min: 1,
      max: 1,
      desc: 'Event Type',
    },
    PID: {
      idx: 4,
      min: 1,
      max: 1,
      desc: 'Patient Identification',
    },
    PV1: {
      idx: 5,
      min: 1,
      max: 1,
      desc: 'Patient Visit',
    },
    DG1: {
      idx: 6,
      desc: 'Diagnosis',
    },
    DRG: {
      idx: 7,
      max: 1,
      desc: 'Diagnosis Related Group',
    },
    PROCEDURE: {
      idx: 8,
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

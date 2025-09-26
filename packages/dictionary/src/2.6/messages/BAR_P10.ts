import { HL7MessageDefinition } from '../../types.js';

export const BAR_P10: HL7MessageDefinition = {
  desc: 'Transmit ambulatory payment classification(apc)',
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
    GP1: {
      idx: 7,
      min: 1,
      max: 1,
      desc: 'Grouping/Reimbursement - Visit',
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
        GP2: {
          idx: 1,
          max: 1,
          desc: 'Grouping/reimbursement - Procedure',
        },
      },
    },
  },
};

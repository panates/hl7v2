import { HL7MessageDefinition } from '../../types.js';

export const BAR_P10: HL7MessageDefinition = {
  desc: 'Transmit ambulatory payment classification(apc)',
  segments: {
    MSH: {
      idx: 0,
      min: 1,
      max: 1,
      desc: 'Message header',
    },
    EVN: {
      idx: 1,
      min: 1,
      max: 1,
      desc: 'Event type',
    },
    PID: {
      idx: 2,
      min: 1,
      max: 1,
      desc: 'Patient identification',
    },
    PV1: {
      idx: 3,
      min: 1,
      max: 1,
      desc: 'Patient visit',
    },
    DG1: {
      idx: 4,
      desc: 'Diagnosis',
    },
    GP1: {
      idx: 5,
      min: 1,
      max: 1,
      desc: 'Grouping/reimbursement - visit',
    },
    PROCEDURE: {
      idx: 6,
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
          desc: 'Grouping/reimbursement - procedure line item',
        },
      },
    },
  },
};

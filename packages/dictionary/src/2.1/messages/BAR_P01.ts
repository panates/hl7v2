import { HL7MessageDefinition } from '../../types.js';

export const BAR_P01: HL7MessageDefinition = {
  desc: 'Add patient accounts',
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
    VISIT: {
      idx: 3,
      min: 1,
      desc: 'Visit',
      segments: {
        PV1: {
          idx: 0,
          max: 1,
          desc: 'Patient visit',
        },
        DG1: {
          idx: 1,
          desc: 'Diagnosis',
        },
        PR1: {
          idx: 2,
          desc: 'Procedures',
        },
        GT1: {
          idx: 3,
          desc: 'Guarantor',
        },
        NK1: {
          idx: 4,
          desc: 'Next of kin',
        },
        IN1: {
          idx: 5,
          desc: 'Insurance',
        },
        ACC: {
          idx: 6,
          max: 1,
          desc: 'Accident',
        },
        UB1: {
          idx: 7,
          max: 1,
          desc: 'Ub82 data',
        },
      },
    },
  },
};

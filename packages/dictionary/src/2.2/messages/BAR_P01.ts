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
        PV2: {
          idx: 1,
          max: 1,
          desc: 'Patient visit - additional information',
        },
        OBX: {
          idx: 2,
          desc: 'Observation result',
        },
        AL1: {
          idx: 3,
          desc: 'Patient allergy information',
        },
        DG1: {
          idx: 4,
          desc: 'Diagnosis',
        },
        PR1: {
          idx: 5,
          desc: 'Procedures',
        },
        GT1: {
          idx: 6,
          desc: 'Guarantor',
        },
        NK1: {
          idx: 7,
          desc: 'Next of kin',
        },
        INSURANCE: {
          idx: 8,
          desc: 'Insurance',
          segments: {
            IN1: {
              idx: 0,
              min: 1,
              max: 1,
              desc: 'Insurance',
            },
            IN2: {
              idx: 1,
              max: 1,
              desc: 'Insurance additional info',
            },
            IN3: {
              idx: 2,
              max: 1,
              desc: 'Insurance additional info-certification',
            },
          },
        },
        ACC: {
          idx: 9,
          max: 1,
          desc: 'Accident',
        },
        UB1: {
          idx: 10,
          max: 1,
          desc: 'Ub82 data',
        },
        UB2: {
          idx: 11,
          max: 1,
          desc: 'Ub92 data',
        },
      },
    },
  },
};

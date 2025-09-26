import { HL7MessageDefinition } from '../../types.js';

export const ADT_A14: HL7MessageDefinition = {
  desc: 'Pending admit',
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
    NK1: {
      idx: 3,
      desc: 'Next of kin',
    },
    PV1: {
      idx: 4,
      min: 1,
      max: 1,
      desc: 'Patient visit',
    },
    PV2: {
      idx: 5,
      max: 1,
      desc: 'Patient visit - additional information',
    },
    OBX: {
      idx: 6,
      desc: 'Observation result',
    },
    AL1: {
      idx: 7,
      desc: 'Patient allergy information',
    },
    DG1: {
      idx: 8,
      desc: 'Diagnosis',
    },
    PR1: {
      idx: 9,
      desc: 'Procedures',
    },
    GT1: {
      idx: 10,
      desc: 'Guarantor',
    },
    INSURANCE: {
      idx: 11,
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
      idx: 12,
      max: 1,
      desc: 'Accident',
    },
    UB1: {
      idx: 13,
      max: 1,
      desc: 'Ub82 data',
    },
    UB2: {
      idx: 14,
      max: 1,
      desc: 'Ub92 data',
    },
  },
};

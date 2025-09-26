import { HL7MessageDefinition } from '../../types.js';

export const ADT_A06: HL7MessageDefinition = {
  desc: 'Change an outpatient to an inpatient',
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
    MRG: {
      idx: 3,
      max: 1,
      desc: 'Merge patient information',
    },
    NK1: {
      idx: 4,
      desc: 'Next of kin',
    },
    PV1: {
      idx: 5,
      min: 1,
      max: 1,
      desc: 'Patient visit',
    },
    PV2: {
      idx: 6,
      max: 1,
      desc: 'Patient visit - additional information',
    },
    OBX: {
      idx: 7,
      desc: 'Observation result',
    },
    AL1: {
      idx: 8,
      desc: 'Patient allergy information',
    },
    DG1: {
      idx: 9,
      desc: 'Diagnosis',
    },
    PR1: {
      idx: 10,
      desc: 'Procedures',
    },
    GT1: {
      idx: 11,
      desc: 'Guarantor',
    },
    INSURANCE: {
      idx: 12,
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
      idx: 13,
      max: 1,
      desc: 'Accident',
    },
    UB1: {
      idx: 14,
      max: 1,
      desc: 'Ub82 data',
    },
    UB2: {
      idx: 15,
      max: 1,
      desc: 'Ub92 data',
    },
  },
};

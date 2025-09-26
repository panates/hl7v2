import { HL7MessageDefinition } from '../../types.js';

export const ADT_A07: HL7MessageDefinition = {
  desc: 'Change an inpatient to an outpatient',
  segments: {
    MSH: {
      idx: 0,
      min: 1,
      max: 1,
      desc: 'Message header segment',
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
    PD1: {
      idx: 3,
      max: 1,
      desc: 'Patient demographic',
    },
    MRG: {
      idx: 4,
      max: 1,
      desc: 'Merge patient information',
    },
    NK1: {
      idx: 5,
      desc: 'Next of kin',
    },
    PV1: {
      idx: 6,
      min: 1,
      max: 1,
      desc: 'Patient visit',
    },
    PV2: {
      idx: 7,
      max: 1,
      desc: 'Patient visit - additional information',
    },
    DB1: {
      idx: 8,
      desc: 'Disability segment',
    },
    DRG: {
      idx: 13,
      max: 1,
      desc: 'Diagnosis related group',
    },
    OBX: {
      idx: 10,
      desc: 'Observation segment',
    },
    AL1: {
      idx: 11,
      desc: 'Patient allergy information',
    },
    DG1: {
      idx: 12,
      desc: 'Diagnosis',
    },
    PROCEDURE: {
      idx: 14,
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
    GT1: {
      idx: 15,
      desc: 'Guarantor',
    },
    INSURANCE: {
      idx: 16,
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
          desc: 'Insurance additional info - certification',
        },
      },
    },
    ACC: {
      idx: 17,
      max: 1,
      desc: 'Accident',
    },
    UB1: {
      idx: 18,
      max: 1,
      desc: 'Ub82  data',
    },
    UB2: {
      idx: 19,
      max: 1,
      desc: 'Ub92 data',
    },
  },
};

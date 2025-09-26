import { HL7MessageDefinition } from '../../types.js';

export const ADT_A07: HL7MessageDefinition = {
  desc: 'Change an inpatient to an outpatient',
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
    PD1: {
      idx: 3,
      max: 1,
      desc: 'Patient additional demographic',
    },
    ROL: {
      idx: 9,
      desc: 'Role',
    },
    MRG: {
      idx: 5,
      max: 1,
      desc: 'Merge patient information',
    },
    NK1: {
      idx: 6,
      desc: 'Next of kin / associated parties',
    },
    PV1: {
      idx: 7,
      min: 1,
      max: 1,
      desc: 'Patient visit',
    },
    PV2: {
      idx: 8,
      max: 1,
      desc: 'Patient visit - additional information',
    },
    DB1: {
      idx: 10,
      desc: 'Disability',
    },
    OBX: {
      idx: 11,
      desc: 'Observation/result',
    },
    AL1: {
      idx: 12,
      desc: 'Patient allergy information',
    },
    DG1: {
      idx: 13,
      desc: 'Diagnosis',
    },
    DRG: {
      idx: 14,
      max: 1,
      desc: 'Diagnosis related group',
    },
    PROCEDURE: {
      idx: 15,
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
      idx: 16,
      desc: 'Guarantor',
    },
    INSURANCE: {
      idx: 17,
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
          desc: 'Insurance additional information',
        },
        IN3: {
          idx: 2,
          desc: 'Insurance additional information, certification',
        },
        ROL: {
          idx: 3,
          desc: 'Role',
        },
      },
    },
    ACC: {
      idx: 18,
      max: 1,
      desc: 'Accident',
    },
    UB1: {
      idx: 19,
      max: 1,
      desc: 'Ub82',
    },
    UB2: {
      idx: 20,
      max: 1,
      desc: 'Ub92 data',
    },
  },
};

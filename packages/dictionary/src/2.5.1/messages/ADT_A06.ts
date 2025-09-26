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
    PD1: {
      idx: 4,
      max: 1,
      desc: 'Patient additional demographic',
    },
    ROL: {
      idx: 10,
      desc: 'Role',
    },
    MRG: {
      idx: 6,
      max: 1,
      desc: 'Merge patient information',
    },
    NK1: {
      idx: 7,
      desc: 'Next of kin / associated parties',
    },
    PV1: {
      idx: 8,
      min: 1,
      max: 1,
      desc: 'Patient visit',
    },
    PV2: {
      idx: 9,
      max: 1,
      desc: 'Patient visit - additional information',
    },
    DB1: {
      idx: 11,
      desc: 'Disability',
    },
    OBX: {
      idx: 12,
      desc: 'Observation/result',
    },
    AL1: {
      idx: 13,
      desc: 'Patient allergy information',
    },
    DG1: {
      idx: 14,
      desc: 'Diagnosis',
    },
    DRG: {
      idx: 15,
      max: 1,
      desc: 'Diagnosis related group',
    },
    PROCEDURE: {
      idx: 16,
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
      idx: 17,
      desc: 'Guarantor',
    },
    INSURANCE: {
      idx: 18,
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
      idx: 19,
      max: 1,
      desc: 'Accident',
    },
    UB1: {
      idx: 20,
      max: 1,
      desc: 'Ub82',
    },
    UB2: {
      idx: 21,
      max: 1,
      desc: 'Ub92 data',
    },
  },
};

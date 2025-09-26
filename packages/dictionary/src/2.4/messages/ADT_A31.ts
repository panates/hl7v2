import { HL7MessageDefinition } from '../../types.js';

export const ADT_A31: HL7MessageDefinition = {
  desc: 'Update person information',
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
      idx: 8,
      desc: 'Role',
    },
    NK1: {
      idx: 5,
      desc: 'Next of kin / associated parties',
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
      idx: 9,
      desc: 'Disability',
    },
    OBX: {
      idx: 10,
      desc: 'Observation/result',
    },
    AL1: {
      idx: 11,
      desc: 'Patient allergy information',
    },
    DG1: {
      idx: 12,
      desc: 'Diagnosis',
    },
    DRG: {
      idx: 13,
      max: 1,
      desc: 'Diagnosis related group',
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
      idx: 17,
      max: 1,
      desc: 'Accident',
    },
    UB1: {
      idx: 18,
      max: 1,
      desc: 'Ub82',
    },
    UB2: {
      idx: 19,
      max: 1,
      desc: 'Ub92 data',
    },
  },
};

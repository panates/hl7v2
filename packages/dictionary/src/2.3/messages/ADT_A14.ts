import { HL7MessageDefinition } from '../../types.js';

export const ADT_A14: HL7MessageDefinition = {
  desc: 'Pending admit',
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
    DB1: {
      idx: 7,
      desc: 'Disability segment',
    },
    OBX: {
      idx: 8,
      desc: 'Observation segment',
    },
    AL1: {
      idx: 9,
      desc: 'Patient allergy information',
    },
    DG1: {
      idx: 10,
      desc: 'Diagnosis',
    },
    DRG: {
      idx: 11,
      max: 1,
      desc: 'Diagnosis related group',
    },
    PROCEDURE: {
      idx: 12,
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
      idx: 13,
      desc: 'Guarantor',
    },
    INSURANCE: {
      idx: 14,
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
      idx: 15,
      max: 1,
      desc: 'Accident',
    },
    UB1: {
      idx: 16,
      max: 1,
      desc: 'Ub82  data',
    },
    UB2: {
      idx: 17,
      max: 1,
      desc: 'Ub92 data',
    },
  },
};

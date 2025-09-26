import { HL7MessageDefinition } from '../../types.js';

export const BAR_P01: HL7MessageDefinition = {
  desc: 'Add patient accounts',
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
    VISIT: {
      idx: 4,
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
        DB1: {
          idx: 2,
          desc: 'Disability segment',
        },
        OBX: {
          idx: 3,
          desc: 'Observation segment',
        },
        AL1: {
          idx: 4,
          desc: 'Patient allergy information',
        },
        DG1: {
          idx: 5,
          desc: 'Diagnosis',
        },
        DRG: {
          idx: 6,
          max: 1,
          desc: 'Diagnosis related group',
        },
        PROCEDURE: {
          idx: 7,
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
          idx: 8,
          desc: 'Guarantor',
        },
        NK1: {
          idx: 9,
          desc: 'Next of kin',
        },
        INSURANCE: {
          idx: 10,
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
          idx: 11,
          max: 1,
          desc: 'Accident',
        },
        UB1: {
          idx: 12,
          max: 1,
          desc: 'Ub82  data',
        },
        UB2: {
          idx: 13,
          max: 1,
          desc: 'Ub92 data',
        },
      },
    },
  },
};

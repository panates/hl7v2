import { HL7MessageDefinition } from '../../types.js';

export const BAR_P05: HL7MessageDefinition = {
  desc: 'Update account',
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
      idx: 4,
      desc: 'Role',
    },
    VISIT: {
      idx: 5,
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
        ROL: {
          idx: 2,
          desc: 'Role',
        },
        DB1: {
          idx: 3,
          desc: 'Disability',
        },
        OBX: {
          idx: 4,
          desc: 'Observation/result',
        },
        AL1: {
          idx: 5,
          desc: 'Patient allergy information',
        },
        DG1: {
          idx: 6,
          desc: 'Diagnosis',
        },
        DRG: {
          idx: 7,
          max: 1,
          desc: 'Diagnosis related group',
        },
        PROCEDURE: {
          idx: 8,
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
          idx: 9,
          desc: 'Guarantor',
        },
        NK1: {
          idx: 10,
          desc: 'Next of kin / associated parties',
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
          idx: 12,
          max: 1,
          desc: 'Accident',
        },
        UB1: {
          idx: 13,
          max: 1,
          desc: 'Ub82',
        },
        UB2: {
          idx: 14,
          max: 1,
          desc: 'Ub92 data',
        },
        ABS: {
          idx: 15,
          max: 1,
          desc: 'Abstract',
        },
        BLC: {
          idx: 16,
          desc: 'Blood code',
        },
        RMI: {
          idx: 17,
          max: 1,
          desc: 'Risk management incident',
        },
      },
    },
  },
};

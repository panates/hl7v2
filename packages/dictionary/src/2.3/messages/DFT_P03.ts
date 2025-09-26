import { HL7MessageDefinition } from '../../types.js';

export const DFT_P03: HL7MessageDefinition = {
  desc: 'Post detail financial transaction',
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
    PV1: {
      idx: 4,
      max: 1,
      desc: 'Patient visit',
    },
    PV2: {
      idx: 5,
      max: 1,
      desc: 'Patient visit - additional information',
    },
    DB1: {
      idx: 6,
      desc: 'Disability segment',
    },
    OBX: {
      idx: 7,
      desc: 'Observation segment',
    },
    FINANCIAL: {
      idx: 8,
      min: 1,
      desc: 'Financial',
      segments: {
        FT1: {
          idx: 0,
          min: 1,
          max: 1,
          desc: 'Financial transaction',
        },
        FINANCIAL_PROCEDURE: {
          idx: 1,
          desc: 'Financial procedure',
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
      },
    },
    DG1: {
      idx: 9,
      desc: 'Diagnosis',
    },
    DRG: {
      idx: 10,
      max: 1,
      desc: 'Diagnosis related group',
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
          desc: 'Insurance additional info - certification',
        },
      },
    },
    ACC: {
      idx: 13,
      max: 1,
      desc: 'Accident',
    },
  },
};

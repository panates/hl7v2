import { HL7MessageDefinition } from '../../types.js';

export const REF_I13: HL7MessageDefinition = {
  desc: 'Modify patient referral',
  segments: {
    MSH: {
      idx: 0,
      min: 1,
      max: 1,
      desc: 'Message header segment',
    },
    RF1: {
      idx: 1,
      max: 1,
      desc: 'Referral information segment',
    },
    AUTHORIZATION: {
      idx: 2,
      max: 1,
      desc: 'Authorization',
      segments: {
        AUT: {
          idx: 0,
          min: 1,
          max: 1,
          desc: 'Authorization information',
        },
        CTD: {
          idx: 1,
          max: 1,
          desc: 'Contact data',
        },
      },
    },
    PROVIDER: {
      idx: 3,
      min: 1,
      desc: 'Provider',
      segments: {
        PRD: {
          idx: 0,
          min: 1,
          max: 1,
          desc: 'Provider data',
        },
        CTD: {
          idx: 1,
          desc: 'Contact data',
        },
      },
    },
    PID: {
      idx: 4,
      min: 1,
      max: 1,
      desc: 'Patient identification',
    },
    NK1: {
      idx: 5,
      desc: 'Next of kin',
    },
    GT1: {
      idx: 6,
      desc: 'Guarantor',
    },
    INSURANCE: {
      idx: 7,
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
      idx: 8,
      max: 1,
      desc: 'Accident',
    },
    DG1: {
      idx: 9,
      desc: 'Diagnosis',
    },
    DRG: {
      idx: 10,
      desc: 'Diagnosis related group',
    },
    AL1: {
      idx: 11,
      desc: 'Patient allergy information',
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
        AUTHORIZATION: {
          idx: 1,
          max: 1,
          desc: 'Authorization',
          segments: {
            AUT: {
              idx: 0,
              min: 1,
              max: 1,
              desc: 'Authorization information',
            },
            CTD: {
              idx: 1,
              max: 1,
              desc: 'Contact data',
            },
          },
        },
      },
    },
    RESULTS: {
      idx: 13,
      desc: 'Results',
      segments: {
        OBR: {
          idx: 0,
          min: 1,
          max: 1,
          desc: 'Observation request segment',
        },
        NTE: {
          idx: 1,
          desc: 'Notes and comments segment',
        },
        OBSERVATION: {
          idx: 2,
          desc: 'Observation',
          segments: {
            OBX: {
              idx: 0,
              min: 1,
              max: 1,
              desc: 'Observation segment',
            },
            NTE: {
              idx: 1,
              desc: 'Notes and comments segment',
            },
          },
        },
      },
    },
    VISIT: {
      idx: 14,
      max: 1,
      desc: 'Visit',
      segments: {
        PV1: {
          idx: 0,
          min: 1,
          max: 1,
          desc: 'Patient visit',
        },
        PV2: {
          idx: 1,
          max: 1,
          desc: 'Patient visit - additional information',
        },
      },
    },
    NTE: {
      idx: 15,
      desc: 'Notes and comments segment',
    },
  },
};

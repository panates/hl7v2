import { HL7MessageDefinition } from '../../types.js';

export const RPA_I08: HL7MessageDefinition = {
  desc: 'Return patient authorization',
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
    MSA: {
      idx: 2,
      min: 1,
      max: 1,
      desc: 'Message acknowledgment',
    },
    RF1: {
      idx: 3,
      max: 1,
      desc: 'Referral information',
    },
    AUTHORIZATION_1: {
      idx: 4,
      max: 1,
      desc: 'Authorization 1',
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
      idx: 5,
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
      idx: 6,
      min: 1,
      max: 1,
      desc: 'Patient identification',
    },
    NK1: {
      idx: 7,
      desc: 'Next of kin / associated parties',
    },
    GT1: {
      idx: 8,
      desc: 'Guarantor',
    },
    INSURANCE: {
      idx: 9,
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
          max: 1,
          desc: 'Insurance additional information, certification',
        },
      },
    },
    ACC: {
      idx: 10,
      max: 1,
      desc: 'Accident',
    },
    DG1: {
      idx: 11,
      desc: 'Diagnosis',
    },
    DRG: {
      idx: 12,
      desc: 'Diagnosis related group',
    },
    AL1: {
      idx: 13,
      desc: 'Patient allergy information',
    },
    PROCEDURE: {
      idx: 14,
      min: 1,
      desc: 'Procedure',
      segments: {
        PR1: {
          idx: 0,
          min: 1,
          max: 1,
          desc: 'Procedures',
        },
        AUTHORIZATION_2: {
          idx: 1,
          max: 1,
          desc: 'Authorization 2',
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
    OBSERVATION: {
      idx: 15,
      desc: 'Observation',
      segments: {
        OBR: {
          idx: 0,
          min: 1,
          max: 1,
          desc: 'Observation request',
        },
        NTE: {
          idx: 1,
          desc: 'Notes and comments',
        },
        RESULTS: {
          idx: 2,
          desc: 'Results',
          segments: {
            OBX: {
              idx: 0,
              min: 1,
              max: 1,
              desc: 'Observation/result',
            },
            NTE: {
              idx: 1,
              desc: 'Notes and comments',
            },
          },
        },
      },
    },
    VISIT: {
      idx: 16,
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
      idx: 17,
      desc: 'Notes and comments',
    },
  },
};

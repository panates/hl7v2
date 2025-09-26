import { HL7MessageDefinition } from '../../types.js';

export const RPA_I08: HL7MessageDefinition = {
  desc: 'Return patient authorization',
  segments: {
    MSH: {
      idx: 0,
      min: 1,
      max: 1,
      desc: 'Message header segment',
    },
    MSA: {
      idx: 1,
      min: 1,
      max: 1,
      desc: 'Message acknowledgement segment',
    },
    RF1: {
      idx: 2,
      max: 1,
      desc: 'Referral information segment',
    },
    AUTHORIZATION: {
      idx: 3,
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
      idx: 4,
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
      idx: 5,
      min: 1,
      max: 1,
      desc: 'Patient identification',
    },
    NK1: {
      idx: 6,
      desc: 'Next of kin',
    },
    GT1: {
      idx: 7,
      desc: 'Guarantor',
    },
    INSURANCE: {
      idx: 8,
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
      idx: 9,
      max: 1,
      desc: 'Accident',
    },
    DG1: {
      idx: 10,
      desc: 'Diagnosis',
    },
    DRG: {
      idx: 11,
      desc: 'Diagnosis related group',
    },
    AL1: {
      idx: 12,
      desc: 'Patient allergy information',
    },
    PROCEDURE: {
      idx: 13,
      min: 1,
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
    OBSERVATION: {
      idx: 14,
      desc: 'Observation',
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
        RESULTS: {
          idx: 2,
          desc: 'Results',
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
      idx: 15,
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
        NTE: {
          idx: 2,
          desc: 'Notes and comments segment',
        },
      },
    },
  },
};

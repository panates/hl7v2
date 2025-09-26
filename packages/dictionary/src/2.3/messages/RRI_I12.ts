import { HL7MessageDefinition } from '../../types.js';

export const RRI_I12: HL7MessageDefinition = {
  desc: 'Return referral information',
  segments: {
    MSH: {
      idx: 0,
      min: 1,
      max: 1,
      desc: 'Message header segment',
    },
    MSA: {
      idx: 1,
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
    ACC: {
      idx: 6,
      max: 1,
      desc: 'Accident',
    },
    DG1: {
      idx: 7,
      desc: 'Diagnosis',
    },
    DRG: {
      idx: 8,
      desc: 'Diagnosis related group',
    },
    AL1: {
      idx: 9,
      desc: 'Patient allergy information',
    },
    PROCEDURE: {
      idx: 10,
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
      idx: 11,
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
      idx: 12,
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
      idx: 13,
      desc: 'Notes and comments segment',
    },
  },
};

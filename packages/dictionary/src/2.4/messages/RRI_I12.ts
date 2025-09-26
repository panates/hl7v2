import { HL7MessageDefinition } from '../../types.js';

export const RRI_I12: HL7MessageDefinition = {
  desc: 'Return referral information',
  segments: {
    MSH: {
      idx: 0,
      min: 1,
      max: 1,
      desc: 'Message header',
    },
    MSA: {
      idx: 1,
      max: 1,
      desc: 'Message acknowledgment',
    },
    RF1: {
      idx: 2,
      max: 1,
      desc: 'Referral information',
    },
    AUTHORIZATION_CONTACT: {
      idx: 3,
      max: 1,
      desc: 'Authorization contact',
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
    PROVIDER_CONTACT: {
      idx: 4,
      min: 1,
      desc: 'Provider contact',
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
        AUTHORIZATION_CONTACT: {
          idx: 1,
          max: 1,
          desc: 'Authorization contact',
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
      idx: 11,
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
        RESULTS_NOTES: {
          idx: 2,
          desc: 'Results notes',
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
    PATIENT_VISIT: {
      idx: 12,
      max: 1,
      desc: 'Patient visit',
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
      desc: 'Notes and comments',
    },
  },
};

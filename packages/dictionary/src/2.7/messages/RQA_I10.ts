import { HL7MessageDefinition } from '../../types.js';

export const RQA_I10: HL7MessageDefinition = {
  desc: 'Request for Resubmission of an Authorization',
  segments: {
    MSH: {
      idx: 0,
      min: 1,
      max: 1,
      desc: 'Message Header',
    },
    SFT: {
      idx: 1,
      desc: 'Software segment',
    },
    UAC: {
      idx: 2,
      max: 1,
      desc: 'User Authentication Credential',
    },
    RF1: {
      idx: 3,
      max: 1,
      desc: 'Referral Information',
    },
    AUTHORIZATION: {
      idx: 4,
      max: 1,
      desc: 'Authorization',
      segments: {
        AUT: {
          idx: 0,
          min: 1,
          max: 1,
          desc: 'Authorization Information',
        },
        CTD: {
          idx: 1,
          max: 1,
          desc: 'Contact Data',
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
          desc: 'Provider Data',
        },
        CTD: {
          idx: 1,
          desc: 'Contact Data',
        },
      },
    },
    PID: {
      idx: 6,
      min: 1,
      max: 1,
      desc: 'Patient Identification',
    },
    NK1: {
      idx: 7,
      desc: 'Next of Kin/Associated Parties',
    },
    GUARANTOR_INSURANCE: {
      idx: 8,
      max: 1,
      desc: 'Guarantor Insurance',
      segments: {
        GT1: {
          idx: 0,
          desc: 'Guarantor',
        },
        INSURANCE: {
          idx: 1,
          min: 1,
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
              desc: 'Insurance Additional Info',
            },
            IN3: {
              idx: 2,
              max: 1,
              desc: "Insurance Add'l Info - Cert",
            },
          },
        },
      },
    },
    ACC: {
      idx: 9,
      max: 1,
      desc: 'Accident Information',
    },
    DG1: {
      idx: 10,
      desc: 'Diagnosis',
    },
    DRG: {
      idx: 11,
      desc: 'Diagnosis Related Group',
    },
    AL1: {
      idx: 12,
      desc: 'Allergy Information',
    },
    PROCEDURE: {
      idx: 13,
      desc: 'Procedure',
      segments: {
        PR1: {
          idx: 0,
          min: 1,
          max: 1,
          desc: 'Procedure',
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
              desc: 'Authorization Information',
            },
            CTD: {
              idx: 1,
              max: 1,
              desc: 'Contact Data',
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
          desc: 'Observation Request',
        },
        NTE: {
          idx: 1,
          desc: 'Notes and Comments',
        },
        RESULTS: {
          idx: 2,
          desc: 'Results',
          segments: {
            OBX: {
              idx: 0,
              min: 1,
              max: 1,
              desc: 'Observation/Result',
            },
            NTE: {
              idx: 1,
              desc: 'Notes and Comments',
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
          desc: 'Patient Visit',
        },
        PV2: {
          idx: 1,
          max: 1,
          desc: 'Patient Visit Additional Info',
        },
      },
    },
    NTE: {
      idx: 16,
      desc: 'Notes and Comments',
    },
  },
};

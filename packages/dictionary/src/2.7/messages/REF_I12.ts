import { HL7MessageDefinition } from '../../types.js';

export const REF_I12: HL7MessageDefinition = {
  desc: 'Patient Referral',
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
    AUTHORIZATION_CONTACT: {
      idx: 4,
      max: 1,
      desc: 'Authorization Contact',
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
    PROVIDER_CONTACT: {
      idx: 5,
      min: 1,
      desc: 'Provider Contact',
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
          desc: 'Insurance Additional Info',
        },
        IN3: {
          idx: 2,
          max: 1,
          desc: "Insurance Add'l Info -Cert",
        },
      },
    },
    ACC: {
      idx: 10,
      max: 1,
      desc: 'Accident Information',
    },
    DG1: {
      idx: 11,
      desc: 'Diagnosis',
    },
    DRG: {
      idx: 12,
      desc: 'Diagnosis Related Group',
    },
    AL1: {
      idx: 13,
      desc: 'Allergy Information',
    },
    PROCEDURE: {
      idx: 14,
      desc: 'Procedure',
      segments: {
        PR1: {
          idx: 0,
          min: 1,
          max: 1,
          desc: 'Procedure',
        },
        AUTHORIZATION_CONTACT: {
          idx: 1,
          max: 1,
          desc: 'Authorization Contact',
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
      idx: 15,
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
        RESULTS_NOTES: {
          idx: 2,
          desc: 'Results Notes',
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
    PATIENT_VISIT: {
      idx: 16,
      max: 1,
      desc: 'Patient Visit',
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
      idx: 17,
      desc: 'Notes and Comments',
    },
  },
};

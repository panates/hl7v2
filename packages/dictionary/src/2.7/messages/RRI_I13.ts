import { HL7MessageDefinition } from '../../types.js';

export const RRI_I13: HL7MessageDefinition = {
  desc: 'Response to Modify Patient Referral Request',
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
    MSA: {
      idx: 3,
      max: 1,
      desc: 'Message Acknowledgment',
    },
    RF1: {
      idx: 4,
      max: 1,
      desc: 'Referral Information',
    },
    AUTHORIZATION_CONTACT: {
      idx: 5,
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
      idx: 6,
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
      idx: 7,
      min: 1,
      max: 1,
      desc: 'Patient Identification',
    },
    ACC: {
      idx: 8,
      max: 1,
      desc: 'Accident Information',
    },
    DG1: {
      idx: 9,
      desc: 'Diagnosis',
    },
    DRG: {
      idx: 10,
      desc: 'Diagnosis Related Group',
    },
    AL1: {
      idx: 11,
      desc: 'Allergy Information',
    },
    PROCEDURE: {
      idx: 12,
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
      idx: 13,
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
      idx: 14,
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
      idx: 15,
      desc: 'Notes and Comments',
    },
  },
};

import { HL7MessageDefinition } from '../../types.js';

export const REF_I12: HL7MessageDefinition = {
  desc: 'Patient referral',
  segments: {
    MSH: {
      idx: 0,
      min: 1,
      max: 1,
      desc: 'MSH - message header segment',
    },
    RF1: {
      idx: 1,
      max: 1,
      desc: 'Referral Infomation',
    },
    AUTHORIZATION_CONTACT: {
      idx: 2,
      max: 1,
      desc: 'Authorization contact',
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
      idx: 3,
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
      idx: 4,
      min: 1,
      max: 1,
      desc: 'PID - patient identification segment',
    },
    NK1: {
      idx: 5,
      desc: 'NK1 - next of kin / associated parties segment-',
    },
    GT1: {
      idx: 6,
      desc: 'GT1 - guarantor segment',
    },
    INSURANCE: {
      idx: 7,
      desc: 'Insurance',
      segments: {
        IN1: {
          idx: 0,
          min: 1,
          max: 1,
          desc: 'IN1 - insurance segment',
        },
        IN2: {
          idx: 1,
          max: 1,
          desc: 'IN2 - insurance additional information segment',
        },
        IN3: {
          idx: 2,
          max: 1,
          desc: 'IN3 - insurance additional information, certification segment',
        },
      },
    },
    ACC: {
      idx: 8,
      max: 1,
      desc: 'ACC - accident segment',
    },
    DG1: {
      idx: 9,
      desc: 'DG1 - diagnosis segment',
    },
    DRG: {
      idx: 10,
      desc: 'DRG - diagnosis related group segment',
    },
    AL1: {
      idx: 11,
      desc: 'AL1 - patient allergy information segment',
    },
    PROCEDURE: {
      idx: 12,
      desc: 'Procedure',
      segments: {
        PR1: {
          idx: 0,
          min: 1,
          max: 1,
          desc: 'PR1 - procedures segment',
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
          desc: 'OBR - observation request segment',
        },
        NTE: {
          idx: 1,
          desc: 'NTE - notes and comments segment',
        },
        RESULTS_NOTES: {
          idx: 2,
          desc: 'Results notes',
          segments: {
            OBX: {
              idx: 0,
              min: 1,
              max: 1,
              desc: 'OBX - observation/result segment',
            },
            NTE: {
              idx: 1,
              desc: 'NTE - notes and comments segment',
            },
          },
        },
      },
    },
    PATIENT_VISIT: {
      idx: 14,
      max: 1,
      desc: 'Patient visit',
      segments: {
        PV1: {
          idx: 0,
          min: 1,
          max: 1,
          desc: 'PV1 - patient visit segment-',
        },
        PV2: {
          idx: 1,
          max: 1,
          desc: 'PV2 - patient visit - additional information segment',
        },
      },
    },
    NTE: {
      idx: 15,
      desc: 'NTE - notes and comments segment',
    },
  },
};

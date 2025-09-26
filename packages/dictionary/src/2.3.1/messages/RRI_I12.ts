import { HL7MessageDefinition } from '../../types.js';

export const RRI_I12: HL7MessageDefinition = {
  desc: 'Return referral information',
  segments: {
    MSH: {
      idx: 0,
      min: 1,
      max: 1,
      desc: 'MSH - message header segment',
    },
    MSA: {
      idx: 1,
      max: 1,
      desc: 'MSA - message acknowledgment segment',
    },
    RF1: {
      idx: 2,
      max: 1,
      desc: 'Referral Infomation',
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
      idx: 4,
      min: 1,
      desc: 'Provider contact',
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
      idx: 5,
      min: 1,
      max: 1,
      desc: 'PID - patient identification segment',
    },
    ACC: {
      idx: 6,
      max: 1,
      desc: 'ACC - accident segment',
    },
    DG1: {
      idx: 7,
      desc: 'DG1 - diagnosis segment',
    },
    DRG: {
      idx: 8,
      desc: 'DRG - diagnosis related group segment',
    },
    AL1: {
      idx: 9,
      desc: 'AL1 - patient allergy information segment',
    },
    PROCEDURE: {
      idx: 10,
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
      idx: 11,
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
      idx: 12,
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
      idx: 13,
      desc: 'NTE - notes and comments segment',
    },
  },
};

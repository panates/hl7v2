import { HL7MessageDefinition } from '../../types.js';

export const RQA_I08: HL7MessageDefinition = {
  desc: 'Request for treatment authorization information',
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
    AUTHORIZATION: {
      idx: 2,
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
    GUARANTOR_INSURANCE: {
      idx: 6,
      max: 1,
      desc: 'Guarantor insurance',
      segments: {
        GT1: {
          idx: 0,
          desc: 'GT1 - guarantor segment',
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
      },
    },
    ACC: {
      idx: 7,
      max: 1,
      desc: 'ACC - accident segment',
    },
    DG1: {
      idx: 8,
      desc: 'DG1 - diagnosis segment',
    },
    DRG: {
      idx: 9,
      desc: 'DRG - diagnosis related group segment',
    },
    AL1: {
      idx: 10,
      desc: 'AL1 - patient allergy information segment',
    },
    PROCEDURE: {
      idx: 11,
      desc: 'Procedure',
      segments: {
        PR1: {
          idx: 0,
          min: 1,
          max: 1,
          desc: 'PR1 - procedures segment',
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
      idx: 12,
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
        RESULTS: {
          idx: 2,
          desc: 'Results',
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
    VISIT: {
      idx: 13,
      max: 1,
      desc: 'Visit',
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
      idx: 14,
      desc: 'NTE - notes and comments segment',
    },
  },
};

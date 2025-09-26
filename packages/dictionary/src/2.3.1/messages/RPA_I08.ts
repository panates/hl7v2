import { HL7MessageDefinition } from '../../types.js';

export const RPA_I08: HL7MessageDefinition = {
  desc: 'Return patient authorization',
  segments: {
    MSH: {
      idx: 0,
      min: 1,
      max: 1,
      desc: 'MSH - message header segment',
    },
    MSA: {
      idx: 1,
      min: 1,
      max: 1,
      desc: 'MSA - message acknowledgment segment',
    },
    RF1: {
      idx: 2,
      max: 1,
      desc: 'Referral Infomation',
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
      idx: 4,
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
      idx: 5,
      min: 1,
      max: 1,
      desc: 'PID - patient identification segment',
    },
    NK1: {
      idx: 6,
      desc: 'NK1 - next of kin / associated parties segment-',
    },
    GT1: {
      idx: 7,
      desc: 'GT1 - guarantor segment',
    },
    INSURANCE: {
      idx: 8,
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
      idx: 9,
      max: 1,
      desc: 'ACC - accident segment',
    },
    DG1: {
      idx: 10,
      desc: 'DG1 - diagnosis segment',
    },
    DRG: {
      idx: 11,
      desc: 'DRG - diagnosis related group segment',
    },
    AL1: {
      idx: 12,
      desc: 'AL1 - patient allergy information segment',
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
      idx: 14,
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
      idx: 15,
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
      idx: 16,
      desc: 'NTE - notes and comments segment',
    },
  },
};

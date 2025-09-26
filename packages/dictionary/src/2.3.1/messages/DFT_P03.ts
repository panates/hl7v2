import { HL7MessageDefinition } from '../../types.js';

export const DFT_P03: HL7MessageDefinition = {
  desc: 'Post detail financial transaction',
  segments: {
    MSH: {
      idx: 0,
      min: 1,
      max: 1,
      desc: 'MSH - message header segment',
    },
    EVN: {
      idx: 1,
      min: 1,
      max: 1,
      desc: 'EVN - event type segment',
    },
    PID: {
      idx: 2,
      min: 1,
      max: 1,
      desc: 'PID - patient identification segment',
    },
    PD1: {
      idx: 3,
      max: 1,
      desc: 'Patient Additional Demographic',
    },
    PV1: {
      idx: 4,
      max: 1,
      desc: 'PV1 - patient visit segment-',
    },
    PV2: {
      idx: 5,
      max: 1,
      desc: 'PV2 - patient visit - additional information segment',
    },
    DB1: {
      idx: 6,
      desc: 'DB1 - Disability segment',
    },
    OBX: {
      idx: 7,
      desc: 'OBX - observation/result segment',
    },
    FINANCIAL: {
      idx: 8,
      min: 1,
      desc: 'Financial',
      segments: {
        FT1: {
          idx: 0,
          min: 1,
          max: 1,
          desc: 'FT1 - financial transaction segment',
        },
        FINANCIAL_PROCEDURE: {
          idx: 1,
          desc: 'Financial procedure',
          segments: {
            PR1: {
              idx: 0,
              min: 1,
              max: 1,
              desc: 'PR1 - procedures segment',
            },
            ROL: {
              idx: 1,
              desc: 'Role',
            },
          },
        },
      },
    },
    DG1: {
      idx: 9,
      desc: 'DG1 - diagnosis segment',
    },
    DRG: {
      idx: 10,
      max: 1,
      desc: 'DRG - diagnosis related group segment',
    },
    GT1: {
      idx: 11,
      desc: 'GT1 - guarantor segment',
    },
    INSURANCE: {
      idx: 12,
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
          desc: 'IN3 - insurance additional information, certification segment',
        },
      },
    },
    ACC: {
      idx: 13,
      max: 1,
      desc: 'ACC - accident segment',
    },
  },
};

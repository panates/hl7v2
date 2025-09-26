import { HL7MessageDefinition } from '../../types.js';

export const ADR_A19: HL7MessageDefinition = {
  desc: 'Patient query',
  segments: {
    MSH: {
      idx: 0,
      min: 1,
      max: 1,
      desc: 'Message header',
    },
    MSA: {
      idx: 1,
      min: 1,
      max: 1,
      desc: 'Message acknowledgment',
    },
    ERR: {
      idx: 2,
      max: 1,
      desc: 'Error',
    },
    QAK: {
      idx: 3,
      max: 1,
      desc: 'Query acknowledgment',
    },
    QRD: {
      idx: 4,
      min: 1,
      max: 1,
      desc: 'Original-style query definition',
    },
    QRF: {
      idx: 5,
      max: 1,
      desc: 'Original style query filter',
    },
    QUERY_RESPONSE: {
      idx: 6,
      min: 1,
      desc: 'Query response',
      segments: {
        EVN: {
          idx: 0,
          max: 1,
          desc: 'Event type',
        },
        PID: {
          idx: 1,
          min: 1,
          max: 1,
          desc: 'Patient identification',
        },
        PD1: {
          idx: 2,
          max: 1,
          desc: 'Patient additional demographic',
        },
        ROL: {
          idx: 7,
          desc: 'Role',
        },
        NK1: {
          idx: 4,
          desc: 'Next of kin / associated parties',
        },
        PV1: {
          idx: 5,
          min: 1,
          max: 1,
          desc: 'Patient visit',
        },
        PV2: {
          idx: 6,
          max: 1,
          desc: 'Patient visit - additional information',
        },
        DB1: {
          idx: 8,
          desc: 'Disability',
        },
        OBX: {
          idx: 9,
          desc: 'Observation/result',
        },
        AL1: {
          idx: 10,
          desc: 'Patient allergy information',
        },
        DG1: {
          idx: 11,
          desc: 'Diagnosis',
        },
        DRG: {
          idx: 12,
          max: 1,
          desc: 'Diagnosis related group',
        },
        PROCEDURE: {
          idx: 13,
          desc: 'Procedure',
          segments: {
            PR1: {
              idx: 0,
              min: 1,
              max: 1,
              desc: 'Procedures',
            },
            ROL: {
              idx: 1,
              desc: 'Role',
            },
          },
        },
        GT1: {
          idx: 14,
          desc: 'Guarantor',
        },
        INSURANCE: {
          idx: 15,
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
              desc: 'Insurance additional information',
            },
            IN3: {
              idx: 2,
              desc: 'Insurance additional information, certification',
            },
            ROL: {
              idx: 3,
              desc: 'Role',
            },
          },
        },
        ACC: {
          idx: 16,
          max: 1,
          desc: 'Accident',
        },
        UB1: {
          idx: 17,
          max: 1,
          desc: 'Ub82',
        },
        UB2: {
          idx: 18,
          max: 1,
          desc: 'Ub92 data',
        },
      },
    },
    DSC: {
      idx: 7,
      max: 1,
      desc: 'Continuation pointer',
    },
  },
};

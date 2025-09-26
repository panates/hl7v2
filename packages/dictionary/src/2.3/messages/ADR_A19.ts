import { HL7MessageDefinition } from '../../types.js';

export const ADR_A19: HL7MessageDefinition = {
  desc: 'Patient query',
  segments: {
    MSH: {
      idx: 0,
      min: 1,
      max: 1,
      desc: 'Message header segment',
    },
    MSA: {
      idx: 1,
      min: 1,
      max: 1,
      desc: 'Message acknowledgement segment',
    },
    ERR: {
      idx: 2,
      max: 1,
      desc: 'Error segment',
    },
    QRD: {
      idx: 3,
      min: 1,
      max: 1,
      desc: 'Query definition segment',
    },
    QRF: {
      idx: 4,
      max: 1,
      desc: 'Query filter segment',
    },
    QUERY_RESPONSE: {
      idx: 5,
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
          desc: 'Patient demographic',
        },
        NK1: {
          idx: 3,
          desc: 'Next of kin',
        },
        PV1: {
          idx: 4,
          min: 1,
          max: 1,
          desc: 'Patient visit',
        },
        PV2: {
          idx: 5,
          max: 1,
          desc: 'Patient visit - additional information',
        },
        DB1: {
          idx: 6,
          desc: 'Disability segment',
        },
        OBX: {
          idx: 7,
          desc: 'Observation segment',
        },
        AL1: {
          idx: 8,
          desc: 'Patient allergy information',
        },
        DG1: {
          idx: 9,
          desc: 'Diagnosis',
        },
        DRG: {
          idx: 10,
          max: 1,
          desc: 'Diagnosis related group',
        },
        PROCEDURE: {
          idx: 11,
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
          idx: 12,
          desc: 'Guarantor',
        },
        INSURANCE: {
          idx: 13,
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
              desc: 'Insurance additional info',
            },
            IN3: {
              idx: 2,
              max: 1,
              desc: 'Insurance additional info - certification',
            },
          },
        },
        ACC: {
          idx: 14,
          max: 1,
          desc: 'Accident',
        },
        UB1: {
          idx: 15,
          max: 1,
          desc: 'Ub82  data',
        },
        UB2: {
          idx: 16,
          max: 1,
          desc: 'Ub92 data',
        },
      },
    },
    DSC: {
      idx: 6,
      max: 1,
      desc: 'Continuation pointer segment',
    },
  },
};

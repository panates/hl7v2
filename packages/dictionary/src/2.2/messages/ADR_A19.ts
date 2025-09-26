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
    QRD: {
      idx: 3,
      min: 1,
      max: 1,
      desc: 'Query definition',
    },
    QUERY_RESPONSE: {
      idx: 4,
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
        NK1: {
          idx: 2,
          desc: 'Next of kin',
        },
        PV1: {
          idx: 3,
          min: 1,
          max: 1,
          desc: 'Patient visit',
        },
        PV2: {
          idx: 4,
          max: 1,
          desc: 'Patient visit - additional information',
        },
        OBX: {
          idx: 5,
          desc: 'Observation result',
        },
        AL1: {
          idx: 6,
          desc: 'Patient allergy information',
        },
        DG1: {
          idx: 7,
          desc: 'Diagnosis',
        },
        PR1: {
          idx: 8,
          desc: 'Procedures',
        },
        GT1: {
          idx: 9,
          desc: 'Guarantor',
        },
        INSURANCE: {
          idx: 10,
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
              desc: 'Insurance additional info-certification',
            },
          },
        },
        ACC: {
          idx: 11,
          max: 1,
          desc: 'Accident',
        },
        UB1: {
          idx: 12,
          max: 1,
          desc: 'Ub82 data',
        },
        UB2: {
          idx: 13,
          max: 1,
          desc: 'Ub92 data',
        },
      },
    },
    DSC: {
      idx: 5,
      max: 1,
      desc: 'Continuation pointer',
    },
  },
};

import { HL7MessageDefinition } from '../../types.js';

export const ADR_A19: HL7MessageDefinition = {
  desc: 'Patient query',
  segments: {
    MSH: {
      idx: 0,
      min: 1,
      max: 1,
      desc: 'Message Header',
    },
    SFT: {
      idx: 1,
      desc: 'Software Segment',
    },
    UAC: {
      idx: 2,
      max: 1,
      desc: 'User Authentication Credential',
    },
    MSA: {
      idx: 3,
      min: 1,
      max: 1,
      desc: 'Message Acknowledgment',
    },
    ERR: {
      idx: 4,
      max: 1,
      desc: 'Error',
    },
    QAK: {
      idx: 5,
      max: 1,
      desc: 'Query Acknowledgment',
    },
    QRD: {
      idx: 6,
      min: 1,
      max: 1,
      desc: 'Query Definition',
    },
    QRF: {
      idx: 7,
      max: 1,
      desc: 'Query Filter',
    },
    QUERY_RESPONSE: {
      idx: 8,
      min: 1,
      desc: 'Query response',
      segments: {
        EVN: {
          idx: 0,
          max: 1,
          desc: 'Event Type',
        },
        PID: {
          idx: 1,
          min: 1,
          max: 1,
          desc: 'Patient Identification',
        },
        PD1: {
          idx: 2,
          max: 1,
          desc: 'Additional Demographics',
        },
        ARV: {
          idx: 8,
          desc: 'Access Restrictions',
        },
        ROL: {
          idx: 9,
          desc: 'Role',
        },
        NK1: {
          idx: 5,
          desc: 'Next of Kin / Associated Parties',
        },
        PV1: {
          idx: 6,
          min: 1,
          max: 1,
          desc: 'Patient Visit',
        },
        PV2: {
          idx: 7,
          max: 1,
          desc: 'Patient Visit - Additional Info',
        },
        DB1: {
          idx: 10,
          desc: 'Disability Information',
        },
        OBX: {
          idx: 11,
          desc: 'Observation/Result',
        },
        AL1: {
          idx: 12,
          desc: 'Allergy Information',
        },
        DG1: {
          idx: 13,
          desc: 'Diagnosis Information',
        },
        DRG: {
          idx: 14,
          max: 1,
          desc: 'Diagnosis Related Group',
        },
        PROCEDURE: {
          idx: 15,
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
          idx: 16,
          desc: 'Guarantor',
        },
        INSURANCE: {
          idx: 17,
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
              desc: 'Insurance Additional Info - Cert',
            },
            ROL: {
              idx: 3,
              desc: 'Role',
            },
          },
        },
        ACC: {
          idx: 18,
          max: 1,
          desc: 'Accident Information',
        },
        UB1: {
          idx: 19,
          max: 1,
          desc: 'Universal Bill Information',
        },
        UB2: {
          idx: 20,
          max: 1,
          desc: 'Universal Bill Information',
        },
      },
    },
  },
};

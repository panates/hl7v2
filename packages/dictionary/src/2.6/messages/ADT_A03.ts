import { HL7MessageDefinition } from '../../types.js';

export const ADT_A03: HL7MessageDefinition = {
  desc: 'Discharge/end visit',
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
    EVN: {
      idx: 3,
      min: 1,
      max: 1,
      desc: 'Event Type',
    },
    PID: {
      idx: 4,
      min: 1,
      max: 1,
      desc: 'Patient Identification',
    },
    PD1: {
      idx: 5,
      max: 1,
      desc: 'Additional Demographics',
    },
    ARV: {
      idx: 11,
      desc: 'Access Restrictions',
    },
    ROL: {
      idx: 12,
      desc: 'Role',
    },
    NK1: {
      idx: 8,
      desc: 'Next of Kin / Associated Parties',
    },
    PV1: {
      idx: 9,
      min: 1,
      max: 1,
      desc: 'Patient Visit',
    },
    PV2: {
      idx: 10,
      max: 1,
      desc: 'Patient Visit - Additional Info.',
    },
    DB1: {
      idx: 13,
      desc: 'Disability Information',
    },
    AL1: {
      idx: 14,
      desc: 'Allergy Information',
    },
    DG1: {
      idx: 15,
      desc: 'Diagnosis Information',
    },
    DRG: {
      idx: 16,
      max: 1,
      desc: 'Diagnosis Related Group',
    },
    PROCEDURE: {
      idx: 17,
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
    OBX: {
      idx: 18,
      desc: 'Observation/Result',
    },
    GT1: {
      idx: 19,
      desc: 'Guarantor',
    },
    INSURANCE: {
      idx: 20,
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
          desc: 'Insurance Additional Info.',
        },
        IN3: {
          idx: 2,
          desc: 'Insurance Additional Info - Cert.',
        },
        ROL: {
          idx: 3,
          desc: 'Role',
        },
      },
    },
    ACC: {
      idx: 21,
      max: 1,
      desc: 'Accident Information',
    },
    PDA: {
      idx: 22,
      max: 1,
      desc: 'Patient Death and Autopsy',
    },
  },
};

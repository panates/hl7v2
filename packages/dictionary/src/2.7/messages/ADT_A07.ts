import { HL7MessageDefinition } from '../../types.js';

export const ADT_A07: HL7MessageDefinition = {
  desc: 'Change an Inpatient to an Outpatient',
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
      idx: 12,
      desc: 'Access Restrictions',
    },
    ROL: {
      idx: 13,
      desc: 'Role',
    },
    MRG: {
      idx: 8,
      max: 1,
      desc: 'Merge Information',
    },
    NK1: {
      idx: 9,
      desc: 'Next of Kin / Associated Parties',
    },
    PV1: {
      idx: 10,
      min: 1,
      max: 1,
      desc: 'Patient Visit',
    },
    PV2: {
      idx: 11,
      max: 1,
      desc: 'Patient Visit - Additional Info.',
    },
    DB1: {
      idx: 14,
      desc: 'Disability Information',
    },
    OBX: {
      idx: 15,
      desc: 'Observation/Result',
    },
    AL1: {
      idx: 16,
      desc: 'Allergy Information',
    },
    DG1: {
      idx: 17,
      desc: 'Diagnosis Information',
    },
    DRG: {
      idx: 18,
      max: 1,
      desc: 'Diagnosis Related Group',
    },
    PROCEDURE: {
      idx: 19,
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
      idx: 20,
      desc: 'Guarantor',
    },
    INSURANCE: {
      idx: 21,
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
      idx: 22,
      max: 1,
      desc: 'Accident Information',
    },
    UB1: {
      idx: 23,
      max: 1,
      desc: 'Universal Bill Information',
    },
    UB2: {
      idx: 24,
      max: 1,
      desc: 'Universal Bill 92 Information',
    },
  },
};

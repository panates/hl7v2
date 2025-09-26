import { HL7MessageDefinition } from '../../types.js';

export const BAR_P01: HL7MessageDefinition = {
  desc: 'Add Billing Account',
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
    ROL: {
      idx: 6,
      desc: 'Role',
    },
    VISIT: {
      idx: 7,
      min: 1,
      desc: 'Visit',
      segments: {
        PV1: {
          idx: 0,
          max: 1,
          desc: 'Patient Visit',
        },
        PV2: {
          idx: 1,
          max: 1,
          desc: 'Patient Visit - Additional Info',
        },
        ROL: {
          idx: 2,
          desc: 'Role',
        },
        DB1: {
          idx: 3,
          desc: 'Disability Information',
        },
        OBX: {
          idx: 4,
          desc: 'Observation/Result',
        },
        AL1: {
          idx: 5,
          desc: 'Allergy Information',
        },
        DG1: {
          idx: 6,
          desc: 'Diagnosis',
        },
        DRG: {
          idx: 7,
          max: 1,
          desc: 'Diagnosis Related Group',
        },
        PROCEDURE: {
          idx: 8,
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
          idx: 9,
          desc: 'Guarantor',
        },
        NK1: {
          idx: 10,
          desc: 'Next of Kin/Associated Parties',
        },
        INSURANCE: {
          idx: 11,
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
              desc: 'Insurance - Additional Info.',
            },
            IN3: {
              idx: 2,
              desc: "Insurance - Add'l Info. - Cert.",
            },
            ROL: {
              idx: 3,
              desc: 'Role',
            },
          },
        },
        ACC: {
          idx: 12,
          max: 1,
          desc: 'Accident Information',
        },
        UB1: {
          idx: 13,
          max: 1,
          desc: 'Universal Bill Information',
        },
        UB2: {
          idx: 14,
          max: 1,
          desc: 'Universal Bill 92 Information',
        },
      },
    },
  },
};

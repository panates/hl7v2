import { HL7MessageDefinition } from '../../types.js';

export const CQU_I19: HL7MessageDefinition = {
  desc: 'Collaborative Care Referral',
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
      desc: 'Error',
    },
    RF1: {
      idx: 5,
      min: 1,
      max: 1,
      desc: 'Referral Information',
    },
    PROVIDER_CONTACT: {
      idx: 6,
      desc: 'Provider Contact',
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
    PATIENT: {
      idx: 7,
      desc: 'Patient',
      segments: {
        PID: {
          idx: 0,
          min: 1,
          max: 1,
          desc: 'Patient Identification',
        },
        PD1: {
          idx: 1,
          max: 1,
          desc: 'Additional Demographics',
        },
      },
    },
    NK1: {
      idx: 8,
      desc: 'Next of Kin / Associated Parties',
    },
    INSURANCE: {
      idx: 9,
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
          max: 1,
          desc: 'Insurance Additional Info - Cert.',
        },
      },
    },
    APPOINTMENT_HISTORY: {
      idx: 10,
      desc: 'Appointment History',
      segments: {
        SCH: {
          idx: 0,
          min: 1,
          max: 1,
          desc: 'Schedule Activity Information',
        },
        RESOURCES: {
          idx: 1,
          desc: 'Resources',
          segments: {
            RGS: {
              idx: 0,
              min: 1,
              max: 1,
              desc: 'Resource Group Segment',
            },
            RESOURCE_DETAIL: {
              idx: 1,
              desc: 'Resource Detail',
              segments: {
                'AIS,AIG,AIL,AIP': {
                  idx: 0,
                  desc: 'Resource Object',
                },
                OBX: {
                  idx: 1,
                  desc: 'Observation/Result',
                },
              },
            },
          },
        },
      },
    },
    CLINICAL_HISTORY: {
      idx: 11,
      desc: 'Clinical History',
      segments: {
        ORC: {
          idx: 0,
          min: 1,
          max: 1,
          desc: 'Common Order',
        },
        CLINICAL_HISTORY_DETAIL: {
          idx: 1,
          desc: 'Clinical History Detail',
          segments: {
            'OBR,ODS,PR1,RF1,AL1,IAM,ACC,RMI,DB1,DG1,DRG,PDA': {
              idx: 0,
              desc: 'Clinical History Object',
            },
            OBX: {
              idx: 1,
              desc: 'Observation/Result',
            },
          },
        },
        ROLE_CLINICAL_HISTORY: {
          idx: 2,
          desc: 'Role Clinical History',
          segments: {
            'ROL,PRD': {
              idx: 0,
              desc: 'Role Clinical History Object',
            },
            VAR: {
              idx: 1,
              desc: 'Variance (CLINICAL_HISTORY)',
            },
          },
        },
        CTI: {
          idx: 3,
          desc: 'Clinical Trial Identification',
        },
      },
    },
    PATIENT_VISITS: {
      idx: 12,
      min: 1,
      desc: 'Patient Visits',
      segments: {
        PV1: {
          idx: 0,
          min: 1,
          max: 1,
          desc: 'Patient Visit',
        },
        PV2: {
          idx: 1,
          max: 1,
          desc: 'Patient Visit - Additional Info.',
        },
      },
    },
    MEDICATION_HISTORY: {
      idx: 13,
      desc: 'Medication History',
      segments: {
        ORC: {
          idx: 0,
          min: 1,
          max: 1,
          desc: 'Common Order',
        },
        MEDICATION_ORDER_DETAIL: {
          idx: 1,
          max: 1,
          desc: 'Medication Order Detail',
          segments: {
            RXO: {
              idx: 0,
              min: 1,
              max: 1,
              desc: 'Pharmacy/Treatment Order',
            },
            RXR: {
              idx: 1,
              min: 1,
              desc: 'Pharmacy/Treatment Route',
            },
            RXC: {
              idx: 2,
              desc: 'Pharmacy/Treatment Component (for RXO)',
            },
            OBX: {
              idx: 3,
              desc: 'Observation/Result',
            },
          },
        },
        MEDICATION_ENCODING_DETAIL: {
          idx: 2,
          max: 1,
          desc: 'Medication Encoding Detail',
          segments: {
            RXE: {
              idx: 0,
              min: 1,
              max: 1,
              desc: 'Pharmacy/Treatment Encoded Order',
            },
            RXR: {
              idx: 1,
              min: 1,
              desc: 'Pharmacy/Treatment Route',
            },
            RXC: {
              idx: 2,
              desc: 'Pharmacy/Treatment Component (for RXE)',
            },
            OBX: {
              idx: 3,
              desc: 'Observation/Result',
            },
          },
        },
        MEDICATION_ADMINISTRATION_DETAIL: {
          idx: 3,
          desc: 'Medication Administration Detail',
          segments: {
            RXA: {
              idx: 0,
              min: 1,
              desc: 'Pharmacy/Treatment Administration',
            },
            RXR: {
              idx: 1,
              min: 1,
              max: 1,
              desc: 'Pharmacy/Treatment Route',
            },
            OBX: {
              idx: 2,
              desc: 'Observation/Result',
            },
          },
        },
        CTI: {
          idx: 4,
          desc: 'Clinical Trial Identification',
        },
      },
    },
    PROBLEM: {
      idx: 14,
      desc: 'Problem',
      segments: {
        PRB: {
          idx: 0,
          min: 1,
          max: 1,
          desc: 'Problem',
        },
        VAR: {
          idx: 1,
          desc: 'Variance (Problem)',
        },
        ROLE_PROBLEM: {
          idx: 2,
          desc: 'Role Problem',
          segments: {
            'ROL,PRD': {
              idx: 0,
              desc: 'Role Problem Object',
            },
            VAR: {
              idx: 1,
              desc: 'Variance (Problem Role)',
            },
          },
        },
        OBX: {
          idx: 3,
          desc: 'Observation/Result',
        },
      },
    },
    GOAL: {
      idx: 15,
      desc: 'Goal',
      segments: {
        GOL: {
          idx: 0,
          min: 1,
          max: 1,
          desc: 'Goal',
        },
        VAR: {
          idx: 1,
          desc: 'Variance (Goal)',
        },
        ROLE_GOAL: {
          idx: 2,
          desc: 'Role Goal',
          segments: {
            'ROL,PRD': {
              idx: 0,
              desc: 'Role Goal Object',
            },
            VAR: {
              idx: 1,
              desc: 'Variance (Goal Role)',
            },
          },
        },
        OBX: {
          idx: 3,
          desc: 'Observation/Result',
        },
      },
    },
    PATHWAY: {
      idx: 16,
      desc: 'Pathway',
      segments: {
        PTH: {
          idx: 0,
          min: 1,
          max: 1,
          desc: 'Pathway',
        },
        VAR: {
          idx: 1,
          desc: 'Variance (Pathway)',
        },
        ROLE_PATHWAY: {
          idx: 2,
          desc: 'Role Pathway',
          segments: {
            'ROL,PRD': {
              idx: 0,
              desc: 'Role Pathway Object',
            },
            VAR: {
              idx: 1,
              desc: 'Variance (Pathway Role)',
            },
          },
        },
        OBX: {
          idx: 3,
          desc: 'Observation/Result',
        },
      },
    },
    REL: {
      idx: 17,
      desc: 'Relationship',
    },
  },
};

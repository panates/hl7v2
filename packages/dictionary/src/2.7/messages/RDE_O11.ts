import { HL7MessageDefinition } from '../../types.js';

export const RDE_O11: HL7MessageDefinition = {
  desc: 'Pharmacy/Treatment Encoded Order Message',
  segments: {
    MSH: {
      idx: 0,
      min: 1,
      max: 1,
      desc: 'Message Header',
    },
    SFT: {
      idx: 1,
      desc: 'Software',
    },
    UAC: {
      idx: 2,
      max: 1,
      desc: 'User Authentication Credential',
    },
    NTE: {
      idx: 3,
      desc: 'Notes and Comments (for Header)',
    },
    PATIENT: {
      idx: 4,
      max: 1,
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
        PRT: {
          idx: 2,
          desc: 'Participation (for Patient)',
        },
        NTE: {
          idx: 3,
          desc: 'Notes and Comments (for Patient ID)',
        },
        PATIENT_VISIT: {
          idx: 4,
          max: 1,
          desc: 'Patient Visit',
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
              desc: 'Patient Visit - Additional Info',
            },
            PRT: {
              idx: 2,
              desc: 'Participation (for Patient Visit)',
            },
          },
        },
        INSURANCE: {
          idx: 5,
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
              desc: 'Insurance Additional Information',
            },
            IN3: {
              idx: 2,
              max: 1,
              desc: 'Insurance Additional Information, Certification',
            },
          },
        },
        GT1: {
          idx: 6,
          max: 1,
          desc: 'Guarantor',
        },
        AL1: {
          idx: 7,
          desc: 'Allergy Information',
        },
      },
    },
    ORDER: {
      idx: 5,
      min: 1,
      desc: 'Order',
      segments: {
        ORC: {
          idx: 0,
          min: 1,
          max: 1,
          desc: 'Common Order',
        },
        TIMING: {
          idx: 1,
          desc: 'Timing',
          segments: {
            TQ1: {
              idx: 0,
              min: 1,
              max: 1,
              desc: 'Timing/Quantity',
            },
            TQ2: {
              idx: 1,
              desc: 'Timing/Quantity Order Sequence',
            },
          },
        },
        ORDER_DETAIL: {
          idx: 2,
          max: 1,
          desc: 'Order Detail',
          segments: {
            RXO: {
              idx: 0,
              min: 1,
              max: 1,
              desc: 'Pharmacy/Treatment Prescription Order',
            },
            NTE: {
              idx: 1,
              desc: 'Notes and Comments (for RXO)',
            },
            RXR: {
              idx: 2,
              min: 1,
              desc: 'Pharmacy/Treatment Route',
            },
            COMPONENT: {
              idx: 3,
              desc: 'Component',
              segments: {
                RXC: {
                  idx: 0,
                  min: 1,
                  max: 1,
                  desc: 'Pharmacy/Treatment Component (for RXO)',
                },
                NTE: {
                  idx: 1,
                  desc: 'Notes and Comments (for each RXC)',
                },
              },
            },
          },
        },
        PRT: {
          idx: 5,
          desc: 'Participation (for Encoded Order)',
        },
        RXE: {
          idx: 4,
          min: 1,
          max: 1,
          desc: 'Pharmacy/Treatment Encoded Order',
        },
        NTE: {
          idx: 6,
          desc: 'Notes and Comments (for RXE)',
        },
        TIMING_ENCODED: {
          idx: 7,
          min: 1,
          desc: 'Timing Encoded',
          segments: {
            TQ1: {
              idx: 0,
              min: 1,
              max: 1,
              desc: 'Timing/Quantity',
            },
            TQ2: {
              idx: 1,
              desc: 'Timing/Quantity Order Sequence',
            },
          },
        },
        RXR: {
          idx: 8,
          min: 1,
          desc: 'Pharmacy/Treatment Route',
        },
        RXC: {
          idx: 9,
          desc: 'Pharmacy/Treatment Component (for RXE)',
        },
        OBSERVATION: {
          idx: 10,
          desc: 'Observation',
          segments: {
            OBX: {
              idx: 0,
              min: 1,
              max: 1,
              desc: 'Results',
            },
            PRT: {
              idx: 1,
              desc: 'Participation (for Observation)',
            },
            NTE: {
              idx: 2,
              desc: 'Notes and Comments (for OBX)',
            },
          },
        },
        FT1: {
          idx: 11,
          desc: 'Financial Detail',
        },
        BLG: {
          idx: 12,
          max: 1,
          desc: 'Billing Segment',
        },
        CTI: {
          idx: 13,
          desc: 'Clinical Trial Identification',
        },
      },
    },
  },
};

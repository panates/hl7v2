import { HL7MessageDefinition } from '../../types.js';

export const RDE_O25: HL7MessageDefinition = {
  desc: 'Pharmacy/Treatment Refill Authorization Request Message',
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
        NTE: {
          idx: 2,
          desc: 'Notes and Comments (for Patient ID)',
        },
        PATIENT_VISIT: {
          idx: 3,
          max: 1,
          desc: 'Patient visit',
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
          },
        },
        INSURANCE: {
          idx: 4,
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
          idx: 5,
          max: 1,
          desc: 'Guarantor',
        },
        AL1: {
          idx: 6,
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
          desc: 'Order detail',
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
            COMPONENTS: {
              idx: 3,
              desc: 'Components',
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
        RXE: {
          idx: 3,
          min: 1,
          max: 1,
          desc: 'Pharmacy/Treatment Encoded Order',
        },
        NTE: {
          idx: 4,
          desc: 'Notes and Comments (for RXE)',
        },
        TIMING_ENCODED: {
          idx: 5,
          min: 1,
          desc: 'Timing encoded',
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
          idx: 6,
          min: 1,
          desc: 'Pharmacy/Treatment Route',
        },
        RXC: {
          idx: 7,
          desc: 'Pharmacy/Treatment Component (for RXE)',
        },
        OBSERVATION: {
          idx: 8,
          desc: 'Observation',
          segments: {
            OBX: {
              idx: 0,
              max: 1,
              desc: 'Results',
            },
            NTE: {
              idx: 1,
              desc: 'Notes and Comments (for OBX)',
            },
          },
        },
        FT1: {
          idx: 9,
          desc: 'Financial Detail',
        },
        BLG: {
          idx: 10,
          max: 1,
          desc: 'Billing Segment',
        },
        CTI: {
          idx: 11,
          desc: 'Clinical Trial Identification',
        },
      },
    },
  },
};

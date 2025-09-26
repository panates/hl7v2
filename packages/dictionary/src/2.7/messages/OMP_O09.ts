import { HL7MessageDefinition } from '../../types.js';

export const OMP_O09: HL7MessageDefinition = {
  desc: 'Pharmacy/treatment Order Message',
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
        ADDITIONAL_DEMOGRAPHICS: {
          idx: 1,
          max: 1,
          desc: 'Additional Demographics',
          segments: {
            PD1: {
              idx: 0,
              min: 1,
              max: 1,
              desc: 'Additional Demographics',
            },
            PRT: {
              idx: 1,
              desc: 'Participation (for Additional Demographics)',
            },
          },
        },
        NTE: {
          idx: 2,
          desc: 'Notes and Comments (for Patient ID)',
        },
        PATIENT_VISIT: {
          idx: 3,
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
        RXO: {
          idx: 2,
          min: 1,
          max: 1,
          desc: 'Pharmacy/Treatment Order',
        },
        PRT: {
          idx: 3,
          desc: 'Participation (for Order)',
        },
        NTE: {
          idx: 4,
          desc: 'Notes and Comments (for RXO)',
        },
        RXR: {
          idx: 5,
          min: 1,
          desc: 'Pharmacy/Treatment Route',
        },
        COMPONENT: {
          idx: 6,
          desc: 'Component',
          segments: {
            RXC: {
              idx: 0,
              min: 1,
              max: 1,
              desc: 'Pharmacy/Treatment Component',
            },
            NTE: {
              idx: 1,
              desc: 'Notes and Comments (for each RXC)',
            },
          },
        },
        OBSERVATION: {
          idx: 7,
          desc: 'Observation',
          segments: {
            OBX: {
              idx: 0,
              min: 1,
              max: 1,
              desc: 'Observation/Result',
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
          idx: 8,
          desc: 'Financial Transaction',
        },
        BLG: {
          idx: 9,
          max: 1,
          desc: 'Billing Segment',
        },
      },
    },
  },
};

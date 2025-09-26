import { HL7MessageDefinition } from '../../types.js';

export const OMD_O03: HL7MessageDefinition = {
  desc: 'Dietary Order',
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
    ORDER_DIET: {
      idx: 5,
      min: 1,
      desc: 'Order Diet',
      segments: {
        ORC: {
          idx: 0,
          min: 1,
          max: 1,
          desc: 'Common Order Segment',
        },
        TIMING_DIET: {
          idx: 1,
          desc: 'Timing Diet',
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
        DIET: {
          idx: 2,
          max: 1,
          desc: 'Diet',
          segments: {
            ODS: {
              idx: 0,
              min: 1,
              desc: 'Dietary Orders, Suppl., Prefer.',
            },
            NTE: {
              idx: 1,
              desc: 'Notes and Comments (for ODS)',
            },
            OBSERVATION: {
              idx: 2,
              desc: 'Observation',
              segments: {
                OBX: {
                  idx: 0,
                  min: 1,
                  max: 1,
                  desc: 'Results',
                },
                NTE: {
                  idx: 1,
                  desc: 'Notes and Comments (for OBX)',
                },
              },
            },
          },
        },
      },
    },
    ORDER_TRAY: {
      idx: 6,
      desc: 'Order Tray',
      segments: {
        ORC: {
          idx: 0,
          min: 1,
          max: 1,
          desc: 'Common Order Segment',
        },
        TIMING_TRAY: {
          idx: 1,
          desc: 'Timing Tray',
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
        ODT: {
          idx: 2,
          min: 1,
          desc: 'Diet Tray Instructions',
        },
        NTE: {
          idx: 3,
          desc: 'Notes and Comments (for ODT)',
        },
      },
    },
  },
};

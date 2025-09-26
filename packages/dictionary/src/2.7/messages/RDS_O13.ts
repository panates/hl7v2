import { HL7MessageDefinition } from '../../types.js';

export const RDS_O13: HL7MessageDefinition = {
  desc: 'Pharmacy/Treatment Dispense Message',
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
          desc: 'Notes and Comments (for PID)',
        },
        AL1: {
          idx: 3,
          desc: 'Allergy Information',
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
              desc: 'Pharmacy /Treatment Order',
            },
            ORDER_DETAIL_SUPPLEMENT: {
              idx: 1,
              max: 1,
              desc: 'Order Detail Supplement',
              segments: {
                NTE: {
                  idx: 0,
                  min: 1,
                  desc: 'Notes and Comments (for RXO)',
                },
                RXR: {
                  idx: 1,
                  min: 1,
                  desc: 'Pharmacy/Treatment Route',
                },
                COMPONENT: {
                  idx: 2,
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
              },
            },
          },
        },
        PRT: {
          idx: 6,
          desc: 'Participation (for Treatment Dispense)',
        },
        ENCODING: {
          idx: 4,
          max: 1,
          desc: 'Encoding',
          segments: {
            RXE: {
              idx: 0,
              min: 1,
              max: 1,
              desc: 'Pharmacy/Treatment Encoded Order',
            },
            PRT: {
              idx: 1,
              desc: 'Participation (for Order Encoding)',
            },
            NTE: {
              idx: 2,
              desc: 'Notes and Comments (for RXE)',
            },
            TIMING_ENCODED: {
              idx: 3,
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
              idx: 4,
              min: 1,
              desc: 'Pharmacy/Treatment Route',
            },
            RXC: {
              idx: 5,
              desc: 'Pharmacy/Treatment Component',
            },
          },
        },
        RXD: {
          idx: 5,
          min: 1,
          max: 1,
          desc: 'Pharmacy/Treatment Dispense',
        },
        NTE: {
          idx: 7,
          desc: 'Notes and Comments (for RXD)',
        },
        RXR: {
          idx: 8,
          min: 1,
          desc: 'Pharmacy/Treatment Route',
        },
        RXC: {
          idx: 9,
          desc: 'Pharmacy/Treatment Component',
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
          desc: 'Financial Transaction segment',
        },
      },
    },
  },
};

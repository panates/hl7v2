import { HL7MessageDefinition } from '../../types.js';

export const RGV_O15: HL7MessageDefinition = {
  desc: 'Pharmacy/Treatment Give',
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
        NTE: {
          idx: 1,
          desc: 'Notes and Comments (for PID)',
        },
        AL1: {
          idx: 2,
          desc: 'Allergy Information',
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
                COMPONENTS: {
                  idx: 2,
                  desc: 'Components',
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
          idx: 3,
          desc: 'Participation (for Order)',
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
              desc: 'Participation (for Encoded Order)',
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
        GIVE: {
          idx: 5,
          min: 1,
          desc: 'Give',
          segments: {
            RXG: {
              idx: 0,
              min: 1,
              max: 1,
              desc: 'Pharmacy/Treatment Give',
            },
            TIMING_GIVE: {
              idx: 1,
              min: 1,
              desc: 'Timing Give',
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
              idx: 2,
              min: 1,
              desc: 'Pharmacy/Treatment Route',
            },
            RXC: {
              idx: 3,
              desc: 'Pharmacy/Treatment Component',
            },
            OBSERVATION: {
              idx: 4,
              desc: 'Observation',
              segments: {
                OBX: {
                  idx: 0,
                  min: 1,
                  max: 1,
                  desc: 'Observation/Results',
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
          },
        },
      },
    },
  },
};

import { HL7MessageDefinition } from '../../types.js';

export const RAS_O17: HL7MessageDefinition = {
  desc: 'Pharmacy/treatment administration',
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
          desc: 'Notes and Comments (for PID)',
        },
        AL1: {
          idx: 3,
          desc: 'Allergy Information',
        },
        PATIENT_VISIT: {
          idx: 4,
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
              desc: 'Pharmacy /Treatment Order',
            },
            ORDER_DETAIL_SUPPLEMENT: {
              idx: 1,
              max: 1,
              desc: 'Order detail supplement',
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
        ENCODING: {
          idx: 3,
          max: 1,
          desc: 'Encoding',
          segments: {
            RXE: {
              idx: 0,
              min: 1,
              max: 1,
              desc: 'Pharmacy/Treatment Encoded Order',
            },
            TIMING_ENCODED: {
              idx: 1,
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
              idx: 2,
              min: 1,
              desc: 'Pharmacy/Treatment Route',
            },
            RXC: {
              idx: 3,
              desc: 'Pharmacy/Treatment Component',
            },
          },
        },
        ADMINISTRATION: {
          idx: 4,
          min: 1,
          desc: 'Administration',
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
            OBSERVATION: {
              idx: 2,
              desc: 'Observation',
              segments: {
                OBX: {
                  idx: 0,
                  min: 1,
                  max: 1,
                  desc: 'Observation/Result',
                },
                NTE: {
                  idx: 1,
                  desc: 'Notes and Comments (for OBX)',
                },
              },
            },
          },
        },
        CTI: {
          idx: 5,
          desc: 'Clinical Trial Identification',
        },
      },
    },
  },
};

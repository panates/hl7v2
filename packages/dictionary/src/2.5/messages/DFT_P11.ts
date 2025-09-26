import { HL7MessageDefinition } from '../../types.js';

export const DFT_P11: HL7MessageDefinition = {
  desc: 'Detail financial transactions',
  segments: {
    MSH: {
      idx: 0,
      min: 1,
      max: 1,
      desc: 'Message header',
    },
    SFT: {
      idx: 1,
      desc: 'Software segment',
    },
    EVN: {
      idx: 2,
      min: 1,
      max: 1,
      desc: 'Event type',
    },
    PID: {
      idx: 3,
      min: 1,
      max: 1,
      desc: 'Patient identification',
    },
    PD1: {
      idx: 4,
      max: 1,
      desc: 'Patient additional demographic',
    },
    ROL: {
      idx: 8,
      desc: 'Role',
    },
    PV1: {
      idx: 6,
      max: 1,
      desc: 'Patient visit',
    },
    PV2: {
      idx: 7,
      max: 1,
      desc: 'Patient visit - additional information',
    },
    DB1: {
      idx: 9,
      desc: 'Disability',
    },
    COMMON_ORDER: {
      idx: 10,
      desc: 'Common order',
      segments: {
        ORC: {
          idx: 0,
          max: 1,
          desc: 'Common order',
        },
        TIMING_QUANTITY: {
          idx: 1,
          desc: 'Timing quantity',
          segments: {
            TQ1: {
              idx: 0,
              min: 1,
              max: 1,
              desc: 'Timing/quantity',
            },
            TQ2: {
              idx: 1,
              desc: 'Timing/quantity relationship',
            },
          },
        },
        ORDER: {
          idx: 2,
          max: 1,
          desc: 'Order',
          segments: {
            OBR: {
              idx: 0,
              min: 1,
              max: 1,
              desc: 'Observation request',
            },
            NTE: {
              idx: 1,
              desc: 'Notes and comments',
            },
          },
        },
        OBSERVATION: {
          idx: 3,
          desc: 'Observation',
          segments: {
            OBX: {
              idx: 0,
              min: 1,
              max: 1,
              desc: 'Observation/result',
            },
            NTE: {
              idx: 1,
              desc: 'Notes and comments',
            },
          },
        },
      },
    },
    DG1: {
      idx: 11,
      desc: 'Diagnosis',
    },
    DRG: {
      idx: 12,
      max: 1,
      desc: 'Diagnosis related group',
    },
    GT1: {
      idx: 13,
      desc: 'Guarantor',
    },
    INSURANCE: {
      idx: 14,
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
          desc: 'Insurance additional information',
        },
        IN3: {
          idx: 2,
          desc: 'Insurance additional information, certification',
        },
        ROL: {
          idx: 3,
          desc: 'Role',
        },
      },
    },
    ACC: {
      idx: 15,
      max: 1,
      desc: 'Accident',
    },
    FINANCIAL: {
      idx: 16,
      min: 1,
      desc: 'Financial',
      segments: {
        FT1: {
          idx: 0,
          min: 1,
          max: 1,
          desc: 'Financial transaction',
        },
        FINANCIAL_PROCEDURE: {
          idx: 1,
          desc: 'Financial procedure',
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
        FINANCIAL_COMMON_ORDER: {
          idx: 2,
          desc: 'Financial common order',
          segments: {
            ORC: {
              idx: 0,
              max: 1,
              desc: 'Common order',
            },
            FINANCIAL_TIMING_QUANTITY: {
              idx: 1,
              desc: 'Financial timing quantity',
              segments: {
                TQ1: {
                  idx: 0,
                  min: 1,
                  max: 1,
                  desc: 'Timing/quantity',
                },
                TQ2: {
                  idx: 1,
                  desc: 'Timing/quantity relationship',
                },
              },
            },
            FINANCIAL_ORDER: {
              idx: 2,
              max: 1,
              desc: 'Financial order',
              segments: {
                OBR: {
                  idx: 0,
                  min: 1,
                  max: 1,
                  desc: 'Observation request',
                },
                NTE: {
                  idx: 1,
                  desc: 'Notes and comments',
                },
              },
            },
            FINANCIAL_OBSERVATION: {
              idx: 3,
              desc: 'Financial observation',
              segments: {
                OBX: {
                  idx: 0,
                  min: 1,
                  max: 1,
                  desc: 'Observation/result',
                },
                NTE: {
                  idx: 1,
                  desc: 'Notes and comments',
                },
              },
            },
          },
        },
        DG1: {
          idx: 3,
          desc: 'Diagnosis',
        },
        DRG: {
          idx: 4,
          max: 1,
          desc: 'Diagnosis related group',
        },
        GT1: {
          idx: 5,
          desc: 'Guarantor',
        },
        FINANCIAL_INSURANCE: {
          idx: 6,
          desc: 'Financial insurance',
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
              desc: 'Insurance additional information',
            },
            IN3: {
              idx: 2,
              desc: 'Insurance additional information, certification',
            },
            ROL: {
              idx: 3,
              desc: 'Role',
            },
          },
        },
      },
    },
  },
};

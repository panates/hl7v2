import { HL7MessageDefinition } from '../../types.js';

export const DFT_P03: HL7MessageDefinition = {
  desc: 'Post detail financial transaction',
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
    FINANCIAL: {
      idx: 11,
      min: 1,
      desc: 'Financial',
      segments: {
        FT1: {
          idx: 0,
          min: 1,
          max: 1,
          desc: 'Financial transaction',
        },
        NTE: {
          idx: 1,
          max: 1,
          desc: 'Notes and comments',
        },
        FINANCIAL_PROCEDURE: {
          idx: 2,
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
          idx: 3,
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
      },
    },
    DG1: {
      idx: 12,
      desc: 'Diagnosis',
    },
    DRG: {
      idx: 13,
      max: 1,
      desc: 'Diagnosis related group',
    },
    GT1: {
      idx: 14,
      desc: 'Guarantor',
    },
    INSURANCE: {
      idx: 15,
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
      idx: 16,
      max: 1,
      desc: 'Accident',
    },
  },
};

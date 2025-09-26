import { HL7MessageDefinition } from '../../types.js';

export const DFT_P03: HL7MessageDefinition = {
  desc: 'Detail Financial Transaction',
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
    EVN: {
      idx: 3,
      min: 1,
      max: 1,
      desc: 'Event Type',
    },
    PID: {
      idx: 4,
      min: 1,
      max: 1,
      desc: 'Patient Identification',
    },
    PD1: {
      idx: 5,
      max: 1,
      desc: 'Additional Demographics',
    },
    ROL: {
      idx: 9,
      desc: 'Role',
    },
    PV1: {
      idx: 7,
      max: 1,
      desc: 'Patient Visit',
    },
    PV2: {
      idx: 8,
      max: 1,
      desc: 'Patient Visit - Additional Info',
    },
    DB1: {
      idx: 10,
      desc: 'Disability Information',
    },
    COMMON_ORDER: {
      idx: 11,
      desc: 'Common Order',
      segments: {
        ORC: {
          idx: 0,
          max: 1,
          desc: 'COMMON_ORDER (across all FT1s)',
        },
        TIMING_QUANTITY: {
          idx: 1,
          desc: 'Timing Quantity',
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
        ORDER: {
          idx: 2,
          max: 1,
          desc: 'Order',
          segments: {
            OBR: {
              idx: 0,
              min: 1,
              max: 1,
              desc: 'Order Detail Segment',
            },
            NTE: {
              idx: 1,
              desc: 'Notes and Comments (on Order Detail)',
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
              desc: 'Observations / Result',
            },
            NTE: {
              idx: 1,
              desc: 'Notes and Comments (on Result)',
            },
          },
        },
      },
    },
    FINANCIAL: {
      idx: 12,
      min: 1,
      desc: 'Financial',
      segments: {
        FT1: {
          idx: 0,
          min: 1,
          max: 1,
          desc: 'Financial Transaction',
        },
        NTE: {
          idx: 1,
          max: 1,
          desc: 'Notes and Comments (on line item - FT1 - above)',
        },
        FINANCIAL_PROCEDURE: {
          idx: 2,
          desc: 'Financial Procedure',
          segments: {
            PR1: {
              idx: 0,
              min: 1,
              max: 1,
              desc: 'Procedure',
            },
            ROL: {
              idx: 1,
              desc: 'Role',
            },
          },
        },
        FINANCIAL_COMMON_ORDER: {
          idx: 3,
          desc: 'Financial Common Order',
          segments: {
            ORC: {
              idx: 0,
              max: 1,
              desc: 'COMMON_ORDER (specific to above FT1)',
            },
            FINANCIAL_TIMING_QUANTITY: {
              idx: 1,
              desc: 'Financial Timing Quantity',
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
            FINANCIAL_ORDER: {
              idx: 2,
              max: 1,
              desc: 'Financial Order',
              segments: {
                OBR: {
                  idx: 0,
                  min: 1,
                  max: 1,
                  desc: 'Order Detail Segment',
                },
                NTE: {
                  idx: 1,
                  desc: 'Notes and Comments (on Order Detail)',
                },
              },
            },
            FINANCIAL_OBSERVATION: {
              idx: 3,
              desc: 'Financial Observation',
              segments: {
                OBX: {
                  idx: 0,
                  min: 1,
                  max: 1,
                  desc: 'Observations / Result',
                },
                NTE: {
                  idx: 1,
                  desc: 'Notes and Comments (on Result)',
                },
              },
            },
          },
        },
      },
    },
    DG1: {
      idx: 13,
      desc: 'Diagnosis (global across all FT1s)',
    },
    DRG: {
      idx: 14,
      max: 1,
      desc: 'Diagnosis Related Group',
    },
    GT1: {
      idx: 15,
      desc: 'Guarantor (global across all FT1s)',
    },
    INSURANCE: {
      idx: 16,
      desc: 'Insurance',
      segments: {
        IN1: {
          idx: 0,
          min: 1,
          max: 1,
          desc: 'Insurance (global across all FT1s)',
        },
        IN2: {
          idx: 1,
          max: 1,
          desc: 'Insurance - Additional Info.',
        },
        IN3: {
          idx: 2,
          desc: 'Insurance - AddвЂ™l Info. - Cert.',
        },
        ROL: {
          idx: 3,
          desc: 'Role',
        },
      },
    },
    ACC: {
      idx: 17,
      max: 1,
      desc: 'Accident Information',
    },
  },
};

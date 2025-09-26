import { HL7MessageDefinition } from '../../types.js';

export const RGV_O15: HL7MessageDefinition = {
  desc: 'Pharmacy/treatment give',
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
    NTE: {
      idx: 2,
      desc: 'Notes and comments',
    },
    PATIENT: {
      idx: 3,
      max: 1,
      desc: 'Patient',
      segments: {
        PID: {
          idx: 0,
          min: 1,
          max: 1,
          desc: 'Patient identification',
        },
        NTE: {
          idx: 1,
          desc: 'Notes and comments',
        },
        AL1: {
          idx: 2,
          desc: 'Patient allergy information',
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
              desc: 'Patient visit',
            },
            PV2: {
              idx: 1,
              max: 1,
              desc: 'Patient visit - additional information',
            },
          },
        },
      },
    },
    ORDER: {
      idx: 4,
      min: 1,
      desc: 'Order',
      segments: {
        ORC: {
          idx: 0,
          min: 1,
          max: 1,
          desc: 'Common order',
        },
        TIMING: {
          idx: 1,
          desc: 'Timing',
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
        ORDER_DETAIL: {
          idx: 2,
          max: 1,
          desc: 'Order detail',
          segments: {
            RXO: {
              idx: 0,
              min: 1,
              max: 1,
              desc: 'Pharmacy/treatment order',
            },
            ORDER_DETAIL_SUPPLEMENT: {
              idx: 1,
              max: 1,
              desc: 'Order detail supplement',
              segments: {
                NTE: {
                  idx: 0,
                  min: 1,
                  desc: 'Notes and comments',
                },
                RXR: {
                  idx: 1,
                  min: 1,
                  desc: 'Pharmacy/treatment route',
                },
                COMPONENTS: {
                  idx: 2,
                  desc: 'Components',
                  segments: {
                    RXC: {
                      idx: 0,
                      min: 1,
                      max: 1,
                      desc: 'Pharmacy/treatment component order',
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
        ENCODING: {
          idx: 3,
          max: 1,
          desc: 'Encoding',
          segments: {
            RXE: {
              idx: 0,
              min: 1,
              max: 1,
              desc: 'Pharmacy/treatment encoded order',
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
                  desc: 'Timing/quantity',
                },
                TQ2: {
                  idx: 1,
                  desc: 'Timing/quantity relationship',
                },
              },
            },
            RXR: {
              idx: 2,
              min: 1,
              desc: 'Pharmacy/treatment route',
            },
            RXC: {
              idx: 3,
              desc: 'Pharmacy/treatment component order',
            },
          },
        },
        GIVE: {
          idx: 4,
          min: 1,
          desc: 'Give',
          segments: {
            RXG: {
              idx: 0,
              min: 1,
              max: 1,
              desc: 'Pharmacy/treatment give',
            },
            TIMING_GIVE: {
              idx: 1,
              min: 1,
              desc: 'Timing give',
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
            RXR: {
              idx: 2,
              min: 1,
              desc: 'Pharmacy/treatment route',
            },
            RXC: {
              idx: 3,
              desc: 'Pharmacy/treatment component order',
            },
            OBSERVATION: {
              idx: 4,
              min: 1,
              desc: 'Observation',
              segments: {
                OBX: {
                  idx: 0,
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
  },
};

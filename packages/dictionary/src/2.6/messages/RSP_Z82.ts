import { HL7MessageDefinition } from '../../types.js';

export const RSP_Z82: HL7MessageDefinition = {
  desc: 'Segment pattern response',
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
    MSA: {
      idx: 2,
      min: 1,
      max: 1,
      desc: 'Message acknowledgment',
    },
    ERR: {
      idx: 3,
      max: 1,
      desc: 'Error',
    },
    QAK: {
      idx: 4,
      min: 1,
      max: 1,
      desc: 'Query acknowledgment',
    },
    QPD: {
      idx: 5,
      min: 1,
      max: 1,
      desc: 'Query parameter definition',
    },
    RCP: {
      idx: 6,
      min: 1,
      max: 1,
      desc: 'Response control parameter',
    },
    QUERY_RESPONSE: {
      idx: 7,
      min: 1,
      desc: 'Query response',
      segments: {
        PATIENT: {
          idx: 0,
          max: 1,
          desc: 'Patient',
          segments: {
            PID: {
              idx: 0,
              min: 1,
              max: 1,
              desc: 'Patient identification',
            },
            PD1: {
              idx: 1,
              max: 1,
              desc: 'Patient additional demographic',
            },
            NTE: {
              idx: 2,
              desc: 'Notes and comments',
            },
            VISIT: {
              idx: 3,
              max: 1,
              desc: 'Visit',
              segments: {
                AL1: {
                  idx: 0,
                  min: 1,
                  desc: 'Patient allergy information',
                },
                PV1: {
                  idx: 1,
                  min: 1,
                  max: 1,
                  desc: 'Patient visit',
                },
                PV2: {
                  idx: 2,
                  max: 1,
                  desc: 'Patient visit - additional information',
                },
              },
            },
          },
        },
        COMMON_ORDER: {
          idx: 1,
          min: 1,
          desc: 'Common order',
          segments: {
            ORC: {
              idx: 0,
              min: 1,
              max: 1,
              desc: 'Common order',
            },
            TIMING: {
              idx: 1,
              min: 1,
              max: 1,
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
                NTE: {
                  idx: 1,
                  desc: 'Notes and comments',
                },
                RXR: {
                  idx: 2,
                  min: 1,
                  desc: 'Pharmacy/treatment route',
                },
                TREATMENT: {
                  idx: 3,
                  max: 1,
                  desc: 'Treatment',
                  segments: {
                    RXC: {
                      idx: 0,
                      min: 1,
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
            ENCODED_ORDER: {
              idx: 3,
              max: 1,
              desc: 'Encoded order',
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
                  max: 1,
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
            RXD: {
              idx: 4,
              min: 1,
              max: 1,
              desc: 'Pharmacy/treatment dispense',
            },
            RXR: {
              idx: 5,
              min: 1,
              desc: 'Pharmacy/treatment route',
            },
            RXC: {
              idx: 6,
              desc: 'Pharmacy/treatment component order',
            },
            OBSERVATION: {
              idx: 7,
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
    DSC: {
      idx: 8,
      max: 1,
      desc: 'Continuation pointer',
    },
  },
};

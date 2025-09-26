import { HL7MessageDefinition } from '../../types.js';

export const RSP_Z86: HL7MessageDefinition = {
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
    QUERY_RESPONSE: {
      idx: 6,
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
            AL1: {
              idx: 3,
              desc: 'Patient allergy information',
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
                RXR: {
                  idx: 1,
                  min: 1,
                  desc: 'Pharmacy/treatment route',
                },
                RXC: {
                  idx: 2,
                  desc: 'Pharmacy/treatment component order',
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
            DISPENSE: {
              idx: 4,
              max: 1,
              desc: 'Dispense',
              segments: {
                RXD: {
                  idx: 0,
                  min: 1,
                  max: 1,
                  desc: 'Pharmacy/treatment dispense',
                },
                RXR: {
                  idx: 1,
                  min: 1,
                  desc: 'Pharmacy/treatment route',
                },
                RXC: {
                  idx: 2,
                  desc: 'Pharmacy/treatment component order',
                },
              },
            },
            GIVE: {
              idx: 5,
              max: 1,
              desc: 'Give',
              segments: {
                RXG: {
                  idx: 0,
                  min: 1,
                  max: 1,
                  desc: 'Pharmacy/treatment give',
                },
                RXR: {
                  idx: 1,
                  min: 1,
                  desc: 'Pharmacy/treatment route',
                },
                RXC: {
                  idx: 2,
                  desc: 'Pharmacy/treatment component order',
                },
              },
            },
            ADMINISTRATION: {
              idx: 6,
              max: 1,
              desc: 'Administration',
              segments: {
                RXA: {
                  idx: 0,
                  min: 1,
                  max: 1,
                  desc: 'Pharmacy/treatment administration',
                },
                RXR: {
                  idx: 1,
                  min: 1,
                  desc: 'Pharmacy/treatment route',
                },
                RXC: {
                  idx: 2,
                  desc: 'Pharmacy/treatment component order',
                },
              },
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
      idx: 7,
      max: 1,
      desc: 'Continuation pointer',
    },
  },
};

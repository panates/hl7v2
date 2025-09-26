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
    MSA: {
      idx: 1,
      min: 1,
      max: 1,
      desc: 'Message acknowledgment',
    },
    ERR: {
      idx: 2,
      max: 1,
      desc: 'Error',
    },
    QAK: {
      idx: 3,
      min: 1,
      max: 1,
      desc: 'Query acknowledgment',
    },
    QPD: {
      idx: 4,
      min: 1,
      max: 1,
      desc: 'Query parameter definition',
    },
    RCP: {
      idx: 5,
      min: 1,
      max: 1,
      desc: 'Response control parameter',
    },
    QUERY_RESPONSE: {
      idx: 6,
      desc: 'Query response',
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
            PATIENT_VISIT: {
              idx: 1,
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
        COMMON_ORDER: {
          idx: 4,
          min: 1,
          desc: 'Common order',
          segments: {
            ORC: {
              idx: 0,
              min: 1,
              max: 1,
              desc: 'Common order',
            },
            ORDER_DETAIL: {
              idx: 1,
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
              idx: 2,
              max: 1,
              desc: 'Encoded order',
              segments: {
                RXE: {
                  idx: 0,
                  min: 1,
                  max: 1,
                  desc: 'Pharmacy/treatment encoded order',
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
            RXD: {
              idx: 3,
              min: 1,
              max: 1,
              desc: 'Pharmacy/treatment dispense',
            },
            RXR: {
              idx: 4,
              min: 1,
              desc: 'Pharmacy/treatment route',
            },
            RXC: {
              idx: 5,
              desc: 'Pharmacy/treatment component order',
            },
            OBSERVATION: {
              idx: 6,
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

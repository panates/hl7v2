import { HL7MessageDefinition } from '../../types.js';

export const PRR_PC5: HL7MessageDefinition = {
  desc: 'Problem response',
  segments: {
    MSH: {
      idx: 0,
      min: 1,
      max: 1,
      desc: 'Message header segment',
    },
    MSA: {
      idx: 1,
      min: 1,
      max: 1,
      desc: 'Message acknowledgement segment',
    },
    ERR: {
      idx: 2,
      max: 1,
      desc: 'Error segment',
    },
    QRD: {
      idx: 3,
      min: 1,
      max: 1,
      desc: 'Query definition segment',
    },
    PATIENT: {
      idx: 4,
      min: 1,
      desc: 'Patient',
      segments: {
        PID: {
          idx: 0,
          min: 1,
          max: 1,
          desc: 'Patient identification',
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
        PROBLEM: {
          idx: 2,
          min: 1,
          desc: 'Problem',
          segments: {
            PRB: {
              idx: 0,
              min: 1,
              max: 1,
              desc: 'Problem detail',
            },
            NTE: {
              idx: 1,
              desc: 'Notes and comments segment',
            },
            VAR: {
              idx: 2,
              desc: 'Variance',
            },
            PROBLEM_ROLE: {
              idx: 3,
              desc: 'Problem role',
              segments: {
                ROL: {
                  idx: 0,
                  min: 1,
                  max: 1,
                  desc: 'Role',
                },
                VAR: {
                  idx: 1,
                  desc: 'Variance',
                },
              },
            },
            PROBLEM_PATHWAY: {
              idx: 4,
              desc: 'Problem pathway',
              segments: {
                PTH: {
                  idx: 0,
                  min: 1,
                  max: 1,
                  desc: 'Pathway',
                },
                VAR: {
                  idx: 1,
                  desc: 'Variance',
                },
              },
            },
            PROBLEM_OBSERVATION: {
              idx: 5,
              desc: 'Problem observation',
              segments: {
                OBX: {
                  idx: 0,
                  min: 1,
                  max: 1,
                  desc: 'Observation segment',
                },
                NTE: {
                  idx: 1,
                  desc: 'Notes and comments segment',
                },
              },
            },
            GOAL: {
              idx: 6,
              desc: 'Goal',
              segments: {
                GOL: {
                  idx: 0,
                  min: 1,
                  max: 1,
                  desc: 'Goal detail',
                },
                NTE: {
                  idx: 1,
                  desc: 'Notes and comments segment',
                },
                VAR: {
                  idx: 2,
                  desc: 'Variance',
                },
                GOAL_ROLE: {
                  idx: 3,
                  desc: 'Goal role',
                  segments: {
                    ROL: {
                      idx: 0,
                      min: 1,
                      max: 1,
                      desc: 'Role',
                    },
                    VAR: {
                      idx: 1,
                      desc: 'Variance',
                    },
                  },
                },
                GOAL_OBSERVATION: {
                  idx: 4,
                  desc: 'Goal observation',
                  segments: {
                    OBX: {
                      idx: 0,
                      min: 1,
                      max: 1,
                      desc: 'Observation segment',
                    },
                    NTE: {
                      idx: 1,
                      desc: 'Notes and comments segment',
                    },
                  },
                },
              },
            },
            ORDER: {
              idx: 7,
              desc: 'Order',
              segments: {
                ORC: {
                  idx: 0,
                  min: 1,
                  max: 1,
                  desc: 'Common order segment',
                },
                ORDER_DETAIL: {
                  idx: 1,
                  max: 1,
                  desc: 'Order detail',
                  segments: {
                    OBR: {
                      idx: 0,
                      min: 1,
                      max: 1,
                      desc: 'Observation request segment',
                    },
                    NTE: {
                      idx: 1,
                      desc: 'Notes and comments segment',
                    },
                    VAR: {
                      idx: 2,
                      desc: 'Variance',
                    },
                    ORDER_OBSERVATION: {
                      idx: 3,
                      desc: 'Order observation',
                      segments: {
                        OBX: {
                          idx: 0,
                          min: 1,
                          max: 1,
                          desc: 'Observation segment',
                        },
                        NTE: {
                          idx: 1,
                          desc: 'Notes and comments segment',
                        },
                        VAR: {
                          idx: 2,
                          desc: 'Variance',
                        },
                      },
                    },
                  },
                },
              },
            },
          },
        },
      },
    },
  },
};

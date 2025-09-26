import { HL7MessageDefinition } from '../../types.js';

export const PPT_PCL: HL7MessageDefinition = {
  desc: 'Pathway (goal-oriented) query response',
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
      max: 1,
      desc: 'Query acknowledgment',
    },
    QRD: {
      idx: 4,
      min: 1,
      max: 1,
      desc: 'Original-style query definition',
    },
    PATIENT: {
      idx: 5,
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
        PATHWAY: {
          idx: 2,
          min: 1,
          desc: 'Pathway',
          segments: {
            PTH: {
              idx: 0,
              min: 1,
              max: 1,
              desc: 'Pathway',
            },
            NTE: {
              idx: 1,
              desc: 'Notes and comments',
            },
            VAR: {
              idx: 2,
              desc: 'Variance',
            },
            PATHWAY_ROLE: {
              idx: 3,
              desc: 'Pathway role',
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
            GOAL: {
              idx: 4,
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
                  desc: 'Notes and comments',
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
                      desc: 'Observation/result',
                    },
                    NTE: {
                      idx: 1,
                      desc: 'Notes and comments',
                    },
                  },
                },
                PROBLEM: {
                  idx: 5,
                  desc: 'Problem',
                  segments: {
                    PRB: {
                      idx: 0,
                      min: 1,
                      max: 1,
                      desc: 'Problem details',
                    },
                    NTE: {
                      idx: 1,
                      desc: 'Notes and comments',
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
                    PROBLEM_OBSERVATION: {
                      idx: 4,
                      desc: 'Problem observation',
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
                ORDER: {
                  idx: 6,
                  desc: 'Order',
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
                        OBR: {
                          idx: 0,
                          min: 1,
                          max: 1,
                          desc: 'Observation request',
                        },
                        RXO: {
                          idx: 1,
                          min: 1,
                          max: 1,
                          desc: 'Pharmacy/treatment order',
                        },
                        NTE: {
                          idx: 2,
                          desc: 'Notes and comments',
                        },
                        VAR: {
                          idx: 3,
                          desc: 'Variance',
                        },
                        ORDER_OBSERVATION: {
                          idx: 4,
                          desc: 'Order observation',
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
    },
  },
};

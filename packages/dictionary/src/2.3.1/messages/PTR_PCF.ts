import { HL7MessageDefinition } from '../../types.js';

export const PTR_PCF: HL7MessageDefinition = {
  desc: 'Pathway (problem-oriented) query response',
  segments: {
    MSH: {
      idx: 0,
      min: 1,
      max: 1,
      desc: 'MSH - message header segment',
    },
    MSA: {
      idx: 1,
      min: 1,
      max: 1,
      desc: 'MSA - message acknowledgment segment',
    },
    ERR: {
      idx: 2,
      max: 1,
      desc: 'ERR - error segment',
    },
    QAK: {
      idx: 3,
      max: 1,
      desc: 'Query Acknowledgement',
    },
    QRD: {
      idx: 4,
      min: 1,
      max: 1,
      desc: 'QRD - original-style query definition segment',
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
          desc: 'PID - patient identification segment',
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
              desc: 'PV1 - patient visit segment-',
            },
            PV2: {
              idx: 1,
              max: 1,
              desc: 'PV2 - patient visit - additional information segment',
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
              desc: 'NTE - notes and comments segment',
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
            PROBLEM: {
              idx: 4,
              desc: 'Problem',
              segments: {
                PRB: {
                  idx: 0,
                  min: 1,
                  max: 1,
                  desc: 'Problem Detail',
                },
                NTE: {
                  idx: 1,
                  desc: 'NTE - notes and comments segment',
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
                      desc: 'OBX - observation/result segment',
                    },
                    NTE: {
                      idx: 1,
                      desc: 'NTE - notes and comments segment',
                    },
                  },
                },
                GOAL: {
                  idx: 5,
                  desc: 'Goal',
                  segments: {
                    GOL: {
                      idx: 0,
                      min: 1,
                      max: 1,
                      desc: 'Goal Detail',
                    },
                    NTE: {
                      idx: 1,
                      desc: 'NTE - notes and comments segment',
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
                          desc: 'OBX - observation/result segment',
                        },
                        NTE: {
                          idx: 1,
                          desc: 'NTE - notes and comments segment',
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
                      desc: 'ORC - common order segment',
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
                          desc: 'OBR - observation request segment',
                        },
                        RXO: {
                          idx: 1,
                          min: 1,
                          max: 1,
                          desc: 'RXO - pharmacy/treatment order segment',
                        },
                        NTE: {
                          idx: 2,
                          desc: 'NTE - notes and comments segment',
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
                              desc: 'OBX - observation/result segment',
                            },
                            NTE: {
                              idx: 1,
                              desc: 'NTE - notes and comments segment',
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

import { HL7MessageDefinition } from '../../types.js';

export const PPV_PCA: HL7MessageDefinition = {
  desc: 'Goal Query Response',
  segments: {
    MSH: {
      idx: 0,
      min: 1,
      max: 1,
      desc: 'Message Header',
    },
    SFT: {
      idx: 1,
      desc: 'Software',
    },
    UAC: {
      idx: 2,
      max: 1,
      desc: 'User Authentication Credential',
    },
    MSA: {
      idx: 3,
      min: 1,
      max: 1,
      desc: 'Message Acknowledgment',
    },
    ERR: {
      idx: 4,
      desc: 'Error',
    },
    QAK: {
      idx: 5,
      max: 1,
      desc: 'Query Acknowledgement',
    },
    QRD: {
      idx: 6,
      min: 1,
      max: 1,
      desc: 'Query Definition',
    },
    PATIENT: {
      idx: 7,
      min: 1,
      desc: 'Patient',
      segments: {
        PID: {
          idx: 0,
          min: 1,
          max: 1,
          desc: 'Patient Identification',
        },
        PATIENT_VISIT: {
          idx: 1,
          max: 1,
          desc: 'Patient Visit',
          segments: {
            PV1: {
              idx: 0,
              min: 1,
              max: 1,
              desc: 'Patient Visit',
            },
            PV2: {
              idx: 1,
              max: 1,
              desc: 'Patient Visit',
            },
          },
        },
        GOAL: {
          idx: 2,
          min: 1,
          desc: 'Goal',
          segments: {
            GOL: {
              idx: 0,
              min: 1,
              max: 1,
              desc: 'Detail Goal',
            },
            NTE: {
              idx: 1,
              desc: 'Notes & Comments (Goal Comments)',
            },
            VAR: {
              idx: 2,
              desc: 'Variance (Goal)',
            },
            GOAL_ROLE: {
              idx: 3,
              desc: 'Goal Role',
              segments: {
                ROL: {
                  idx: 0,
                  min: 1,
                  max: 1,
                  desc: 'Role (Goal)',
                },
                VAR: {
                  idx: 1,
                  desc: 'Variance (Role)',
                },
              },
            },
            GOAL_PATHWAY: {
              idx: 4,
              desc: 'Goal Pathway',
              segments: {
                PTH: {
                  idx: 0,
                  min: 1,
                  max: 1,
                  desc: 'Detail Pathway',
                },
                VAR: {
                  idx: 1,
                  desc: 'Variance (Pathway)',
                },
              },
            },
            GOAL_OBSERVATION: {
              idx: 5,
              desc: 'Goal Observation',
              segments: {
                OBX: {
                  idx: 0,
                  min: 1,
                  max: 1,
                  desc: 'Observation/Result',
                },
                NTE: {
                  idx: 1,
                  desc: 'Notes & Comments (Observation/Result Comments)',
                },
              },
            },
            PROBLEM: {
              idx: 6,
              desc: 'Problem',
              segments: {
                PRB: {
                  idx: 0,
                  min: 1,
                  max: 1,
                  desc: 'Detail Problem',
                },
                NTE: {
                  idx: 1,
                  desc: 'Notes & Comments (Problem Comments)',
                },
                VAR: {
                  idx: 2,
                  desc: 'Variance (Problem)',
                },
                PROBLEM_ROLE: {
                  idx: 3,
                  desc: 'Problem Role',
                  segments: {
                    ROL: {
                      idx: 0,
                      min: 1,
                      max: 1,
                      desc: 'Role (Problem)',
                    },
                    VAR: {
                      idx: 1,
                      desc: 'Variance (Role)',
                    },
                  },
                },
                PROBLEM_OBSERVATION: {
                  idx: 4,
                  desc: 'Problem Observation',
                  segments: {
                    OBX: {
                      idx: 0,
                      min: 1,
                      max: 1,
                      desc: 'Observation/Result',
                    },
                    NTE: {
                      idx: 1,
                      desc: 'Notes & Comments (Observation/Result Comments)',
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
                  desc: 'Common Order',
                },
                ORDER_DETAIL: {
                  idx: 1,
                  max: 1,
                  desc: 'Order Detail',
                  segments: {
                    'OBR,RXO,RXE': {
                      idx: 0,
                      desc: 'Choice',
                    },
                    NTE: {
                      idx: 1,
                      desc: 'Notes & Comments (Order Detail Comments)',
                    },
                    VAR: {
                      idx: 2,
                      desc: 'Variance (Order)',
                    },
                    ORDER_OBSERVATION: {
                      idx: 3,
                      desc: 'Order Observation',
                      segments: {
                        OBX: {
                          idx: 0,
                          min: 1,
                          max: 1,
                          desc: 'Observation/Result',
                        },
                        NTE: {
                          idx: 1,
                          desc: 'Notes & Comments (Observation Comments)',
                        },
                        VAR: {
                          idx: 2,
                          desc: 'Variance (Observation/Result)',
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

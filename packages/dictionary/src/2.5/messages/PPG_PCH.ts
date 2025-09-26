import { HL7MessageDefinition } from '../../types.js';

export const PPG_PCH: HL7MessageDefinition = {
  desc: 'Patient pathway message (goal-oriented)',
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
    PID: {
      idx: 2,
      min: 1,
      max: 1,
      desc: 'Patient Identification',
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
          desc: 'Patient Visit',
        },
        PV2: {
          idx: 1,
          max: 1,
          desc: 'Patient Visit',
        },
      },
    },
    PATHWAY: {
      idx: 4,
      min: 1,
      desc: 'Pathway',
      segments: {
        PTH: {
          idx: 0,
          min: 1,
          max: 1,
          desc: 'Pathway Detail',
        },
        NTE: {
          idx: 1,
          desc: 'Notes & Comments(Pathway Comments)',
        },
        VAR: {
          idx: 2,
          desc: 'Variance (Pathway)',
        },
        PATHWAY_ROLE: {
          idx: 3,
          desc: 'Pathway role',
          segments: {
            ROL: {
              idx: 0,
              min: 1,
              max: 1,
              desc: 'Role (Pathway)',
            },
            VAR: {
              idx: 1,
              desc: 'Variance (Role)',
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
              desc: 'Detail Goal',
            },
            NTE: {
              idx: 1,
              desc: 'Notes & Comments(Goal Comments)',
            },
            VAR: {
              idx: 2,
              desc: 'Variance (Goal)',
            },
            GOAL_ROLE: {
              idx: 3,
              desc: 'Goal role',
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
            GOAL_OBSERVATION: {
              idx: 4,
              desc: 'Goal observation',
              segments: {
                OBX: {
                  idx: 0,
                  min: 1,
                  max: 1,
                  desc: 'Observation/Result',
                },
                NTE: {
                  idx: 1,
                  desc: 'Notes & Comments(Observation/Result Comments)',
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
                  desc: 'Problem role',
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
                  desc: 'Problem observation',
                  segments: {
                    OBX: {
                      idx: 0,
                      min: 1,
                      max: 1,
                      desc: 'Observation/Result',
                    },
                    NTE: {
                      idx: 1,
                      desc: 'Notes & Comments(Observation/Result Comments)',
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
                  desc: 'Common Order',
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
                      desc: 'Order Detail Segment',
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
                      desc: 'Order observation',
                      segments: {
                        OBX: {
                          idx: 0,
                          min: 1,
                          max: 1,
                          desc: 'Observation/Result',
                        },
                        NTE: {
                          idx: 1,
                          desc: 'Notes & Comments(Observation Comments)',
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

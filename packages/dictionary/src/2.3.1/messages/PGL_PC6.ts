import { HL7MessageDefinition } from '../../types.js';

export const PGL_PC6: HL7MessageDefinition = {
  desc: 'Goal add',
  segments: {
    MSH: {
      idx: 0,
      min: 1,
      max: 1,
      desc: 'MSH - message header segment',
    },
    PID: {
      idx: 1,
      min: 1,
      max: 1,
      desc: 'PID - patient identification segment',
    },
    PATIENT_VISIT: {
      idx: 2,
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
    GOAL: {
      idx: 3,
      min: 1,
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
        PATHWAY: {
          idx: 4,
          desc: 'Pathway',
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
        OBSERVATION: {
          idx: 5,
          desc: 'Observation',
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
        PROBLEM: {
          idx: 6,
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
};

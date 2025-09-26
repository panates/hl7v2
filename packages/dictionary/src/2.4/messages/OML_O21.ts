import { HL7MessageDefinition } from '../../types.js';

export const OML_O21: HL7MessageDefinition = {
  desc: 'Laboratory order',
  segments: {
    MSH: {
      idx: 0,
      min: 1,
      max: 1,
      desc: 'Message header',
    },
    NTE: {
      idx: 1,
      desc: 'Notes and comments',
    },
    PATIENT: {
      idx: 2,
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
        INSURANCE: {
          idx: 4,
          desc: 'Insurance',
          segments: {
            IN1: {
              idx: 0,
              min: 1,
              max: 1,
              desc: 'Insurance',
            },
            IN2: {
              idx: 1,
              max: 1,
              desc: 'Insurance additional information',
            },
            IN3: {
              idx: 2,
              max: 1,
              desc: 'Insurance additional information, certification',
            },
          },
        },
        GT1: {
          idx: 5,
          max: 1,
          desc: 'Guarantor',
        },
        AL1: {
          idx: 6,
          desc: 'Patient allergy information',
        },
      },
    },
    ORDER_GENERAL: {
      idx: 3,
      min: 1,
      desc: 'Order general',
      segments: {
        CONTAINER_1: {
          idx: 0,
          max: 1,
          desc: 'Container 1',
          segments: {
            SAC: {
              idx: 0,
              min: 1,
              max: 1,
              desc: 'Specimen and container detail',
            },
            OBX: {
              idx: 1,
              desc: 'Observation/result',
            },
          },
        },
        ORDER: {
          idx: 1,
          min: 1,
          desc: 'Order',
          segments: {
            ORC: {
              idx: 0,
              min: 1,
              max: 1,
              desc: 'Common order',
            },
            OBSERVATION_REQUEST: {
              idx: 1,
              max: 1,
              desc: 'Observation request',
              segments: {
                OBR: {
                  idx: 0,
                  min: 1,
                  max: 1,
                  desc: 'Observation request',
                },
                CONTAINER_2: {
                  idx: 1,
                  desc: 'Container 2',
                  segments: {
                    SAC: {
                      idx: 0,
                      min: 1,
                      max: 1,
                      desc: 'Specimen and container detail',
                    },
                    OBX: {
                      idx: 1,
                      desc: 'Observation/result',
                    },
                  },
                },
                TCD: {
                  idx: 2,
                  max: 1,
                  desc: 'Test code detail',
                },
                NTE: {
                  idx: 3,
                  desc: 'Notes and comments',
                },
                DG1: {
                  idx: 4,
                  desc: 'Diagnosis',
                },
                OBSERVATION: {
                  idx: 5,
                  desc: 'Observation',
                  segments: {
                    OBX: {
                      idx: 0,
                      min: 1,
                      max: 1,
                      desc: 'Observation/result',
                    },
                    TCD: {
                      idx: 1,
                      max: 1,
                      desc: 'Test code detail',
                    },
                    NTE: {
                      idx: 2,
                      desc: 'Notes and comments',
                    },
                  },
                },
                PRIOR_RESULT: {
                  idx: 6,
                  desc: 'Prior result',
                  segments: {
                    PATIENT_PRIOR: {
                      idx: 0,
                      max: 1,
                      desc: 'Patient prior',
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
                      },
                    },
                    PATIENT_VISIT_PRIOR: {
                      idx: 1,
                      max: 1,
                      desc: 'Patient visit prior',
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
                    AL1: {
                      idx: 2,
                      desc: 'Patient allergy information',
                    },
                    ORDER_PRIOR: {
                      idx: 3,
                      min: 1,
                      desc: 'Order prior',
                      segments: {
                        ORC: {
                          idx: 0,
                          max: 1,
                          desc: 'Common order',
                        },
                        OBR: {
                          idx: 1,
                          min: 1,
                          max: 1,
                          desc: 'Observation request',
                        },
                        NTE: {
                          idx: 2,
                          desc: 'Notes and comments',
                        },
                        OBSERVATION_PRIOR: {
                          idx: 3,
                          min: 1,
                          desc: 'Observation prior',
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
                  },
                },
              },
            },
            FT1: {
              idx: 2,
              desc: 'Financial transaction',
            },
            CTI: {
              idx: 3,
              desc: 'Clinical trial identification',
            },
            BLG: {
              idx: 4,
              max: 1,
              desc: 'Billing',
            },
          },
        },
      },
    },
  },
};

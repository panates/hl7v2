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
    SFT: {
      idx: 1,
      desc: 'Software segment',
    },
    NTE: {
      idx: 2,
      desc: 'Notes and comments',
    },
    PATIENT: {
      idx: 3,
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
        NK1: {
          idx: 3,
          desc: 'Next of kin / associated parties',
        },
        PATIENT_VISIT: {
          idx: 4,
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
          idx: 5,
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
          idx: 6,
          max: 1,
          desc: 'Guarantor',
        },
        AL1: {
          idx: 7,
          desc: 'Patient allergy information',
        },
      },
    },
    ORDER: {
      idx: 4,
      min: 1,
      desc: 'Order',
      segments: {
        ORC: {
          idx: 0,
          min: 1,
          max: 1,
          desc: 'Common order',
        },
        TIIMING: {
          idx: 1,
          desc: 'Tiiming',
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
        OBSERVATION_REQUEST: {
          idx: 2,
          max: 1,
          desc: 'Observation request',
          segments: {
            OBR: {
              idx: 0,
              min: 1,
              max: 1,
              desc: 'Observation request',
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
            CTD: {
              idx: 3,
              max: 1,
              desc: 'Contact data',
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
            SPECIMEN: {
              idx: 6,
              desc: 'Specimen',
              segments: {
                SPM: {
                  idx: 0,
                  min: 1,
                  max: 1,
                  desc: 'Specimen',
                },
                OBX: {
                  idx: 1,
                  desc: 'Observation/result',
                },
                CONTAINER: {
                  idx: 2,
                  desc: 'Container',
                  segments: {
                    SAC: {
                      idx: 0,
                      min: 1,
                      max: 1,
                      desc: 'Specimen container detail',
                    },
                    OBX: {
                      idx: 1,
                      desc: 'Observation/result',
                    },
                  },
                },
              },
            },
            PRIOR_RESULT: {
              idx: 7,
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
                    TIMING_PRIOR: {
                      idx: 3,
                      desc: 'Timing prior',
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
                    OBSERVATION_PRIOR: {
                      idx: 4,
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
          idx: 3,
          desc: 'Financial transaction',
        },
        CTI: {
          idx: 4,
          desc: 'Clinical trial identification',
        },
        BLG: {
          idx: 5,
          max: 1,
          desc: 'Billing',
        },
      },
    },
  },
};

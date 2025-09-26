import { HL7MessageDefinition } from '../../types.js';

export const OMG_O19: HL7MessageDefinition = {
  desc: 'General clinical order',
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
        OBR: {
          idx: 2,
          min: 1,
          max: 1,
          desc: 'Observation request',
        },
        NTE: {
          idx: 3,
          desc: 'Notes and comments',
        },
        CTD: {
          idx: 4,
          max: 1,
          desc: 'Contact data',
        },
        DG1: {
          idx: 5,
          desc: 'Diagnosis',
        },
        OBSERVATION: {
          idx: 6,
          desc: 'Observation',
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
        SPECIMEN: {
          idx: 7,
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
          idx: 8,
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
                TIMING_PRIOR: {
                  idx: 2,
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
                NTE: {
                  idx: 3,
                  desc: 'Notes and comments',
                },
                CTD: {
                  idx: 4,
                  max: 1,
                  desc: 'Contact data',
                },
                OBSERVATION_PRIOR: {
                  idx: 5,
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
        FT1: {
          idx: 9,
          desc: 'Financial transaction',
        },
        CTI: {
          idx: 10,
          desc: 'Clinical trial identification',
        },
        BLG: {
          idx: 11,
          max: 1,
          desc: 'Billing',
        },
      },
    },
  },
};

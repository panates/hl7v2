import { HL7MessageDefinition } from '../../types.js';

export const OMG_019: HL7MessageDefinition = {
  desc: 'General clinical order',
  segments: {
    UAC: {
      idx: 0,
      max: 1,
      desc: 'User Authentication Credential',
    },
    NTE: {
      idx: 1,
      desc: 'Notes and Comments (for Header)',
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
          desc: 'Patient Identification',
        },
        PD1: {
          idx: 1,
          max: 1,
          desc: 'Additional Demographics',
        },
        NTE: {
          idx: 2,
          desc: 'Notes and Comments (for Patient ID)',
        },
        NK1: {
          idx: 3,
          desc: 'Next of Kin/Associated Parties',
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
              desc: 'Patient Visit',
            },
            PV2: {
              idx: 1,
              max: 1,
              desc: 'Patient Visit- Additional Info',
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
              desc: 'Insurance Additional Information',
            },
            IN3: {
              idx: 2,
              max: 1,
              desc: 'Insurance Additional Information, Certification',
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
          desc: 'Allergy Information',
        },
      },
    },
    ORDER: {
      idx: 3,
      min: 1,
      desc: 'Order',
      segments: {
        ORC: {
          idx: 0,
          min: 1,
          max: 1,
          desc: 'Common Order',
        },
        TIMING: {
          idx: 1,
          desc: 'Timing',
          segments: {
            TQ1: {
              idx: 0,
              min: 1,
              max: 1,
              desc: 'Timing/Quantity',
            },
            TQ2: {
              idx: 1,
              desc: 'Timing/Quantity Order Sequence',
            },
          },
        },
        OBR: {
          idx: 2,
          min: 1,
          max: 1,
          desc: 'Observation',
        },
        NTE: {
          idx: 3,
          desc: 'Notes and Comments (for Detail)',
        },
        ROL: {
          idx: 4,
          desc: 'Role (for Observation)',
        },
        CTD: {
          idx: 5,
          max: 1,
          desc: 'Contact Data',
        },
        DG1: {
          idx: 6,
          desc: 'Diagnosis',
        },
        OBSERVATION: {
          idx: 7,
          desc: 'Observation',
          segments: {
            OBX: {
              idx: 0,
              min: 1,
              max: 1,
              desc: 'Observation/Result',
            },
            NTE: {
              idx: 1,
              desc: 'Notes and Comments (for Results)',
            },
          },
        },
        SPECIMEN: {
          idx: 8,
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
              desc: 'Observation/Result',
            },
            CONTAINER: {
              idx: 2,
              desc: 'Container',
              segments: {
                SAC: {
                  idx: 0,
                  min: 1,
                  max: 1,
                  desc: 'Specimen Container',
                },
                OBX: {
                  idx: 1,
                  desc: 'Observation/Result',
                },
              },
            },
          },
        },
        PRIOR_RESULT: {
          idx: 9,
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
                  desc: 'Patient Identification  - previous result',
                },
                PD1: {
                  idx: 1,
                  max: 1,
                  desc: 'Additional Demographics - previous result',
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
                  desc: 'Patient Visit           - previous result',
                },
                PV2: {
                  idx: 1,
                  max: 1,
                  desc: 'Patient Visit Add. Info - previous result',
                },
              },
            },
            AL1: {
              idx: 2,
              desc: 'Allergy Information     - previous result',
            },
            ORDER_PRIOR: {
              idx: 3,
              min: 1,
              desc: 'Order prior',
              segments: {
                ORC: {
                  idx: 0,
                  max: 1,
                  desc: 'Common Order            - previous result',
                },
                OBR: {
                  idx: 1,
                  min: 1,
                  max: 1,
                  desc: 'Order Detail            - previous result',
                },
                TIMING_PRIOR: {
                  idx: 2,
                  desc: 'Timing prior',
                  segments: {
                    TQ1: {
                      idx: 0,
                      min: 1,
                      max: 1,
                      desc: 'Timing/Quantity',
                    },
                    TQ2: {
                      idx: 1,
                      desc: 'Timing/Quantity Order Sequence',
                    },
                  },
                },
                NTE: {
                  idx: 3,
                  desc: 'Notes and Comments      - previous result',
                },
                ROL: {
                  idx: 4,
                  desc: 'Role (for Observation)  - previous result',
                },
                CTD: {
                  idx: 5,
                  max: 1,
                  desc: 'Contact Data            - previous result',
                },
                OBSERVATION_PRIOR: {
                  idx: 6,
                  min: 1,
                  desc: 'Observation prior',
                  segments: {
                    OBX: {
                      idx: 0,
                      min: 1,
                      max: 1,
                      desc: 'Observation/Result      - previous result',
                    },
                    NTE: {
                      idx: 1,
                      desc: 'Notes and Comments      - previous result',
                    },
                  },
                },
              },
            },
          },
        },
        FT1: {
          idx: 10,
          desc: 'Financial Transaction',
        },
        CTI: {
          idx: 11,
          desc: 'Clinical Trial Identification',
        },
        BLG: {
          idx: 12,
          max: 1,
          desc: 'Billing Segment',
        },
      },
    },
  },
};

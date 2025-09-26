import { HL7MessageDefinition } from '../../types.js';

export const OML_O21: HL7MessageDefinition = {
  desc: 'Laboratory Order Message',
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
    NTE: {
      idx: 3,
      desc: 'Notes and Comments (for Header)',
    },
    PATIENT: {
      idx: 4,
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
        PRT: {
          idx: 2,
          desc: 'Participation (for Patient)',
        },
        NTE: {
          idx: 3,
          desc: 'Notes and Comments (for Patient ID)',
        },
        NK1: {
          idx: 4,
          desc: 'Next of Kin/Associated Parties',
        },
        PATIENT_VISIT: {
          idx: 5,
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
              desc: 'Patient Visit- Additional Info',
            },
            PRT: {
              idx: 2,
              desc: 'Participation (for Patient Visit)',
            },
          },
        },
        INSURANCE: {
          idx: 6,
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
          idx: 7,
          max: 1,
          desc: 'Guarantor',
        },
        AL1: {
          idx: 8,
          desc: 'Allergy Information',
        },
      },
    },
    ORDER: {
      idx: 5,
      min: 1,
      desc: 'Order',
      segments: {
        ORC: {
          idx: 0,
          min: 1,
          max: 1,
          desc: 'Common Order',
        },
        PRT: {
          idx: 1,
          desc: 'Participation (for COMMON_ORDER)',
        },
        TIMING: {
          idx: 2,
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
        OBSERVATION_REQUEST: {
          idx: 3,
          max: 1,
          desc: 'Observation Request',
          segments: {
            OBR: {
              idx: 0,
              min: 1,
              max: 1,
              desc: 'Observation Request',
            },
            TCD: {
              idx: 1,
              max: 1,
              desc: 'Test Code Details',
            },
            NTE: {
              idx: 2,
              desc: 'Notes and Comments (for Detail)',
            },
            PRT: {
              idx: 3,
              desc: 'Participation (for Observation Request)',
            },
            CTD: {
              idx: 4,
              max: 1,
              desc: 'Contact Data',
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
                  desc: 'Observation/Result',
                },
                PRT: {
                  idx: 1,
                  desc: 'Participation (for OBX)',
                },
                TCD: {
                  idx: 2,
                  max: 1,
                  desc: 'Test Code Detail',
                },
                NTE: {
                  idx: 3,
                  desc: 'Notes and Comments (for Results)',
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
                SPECIMEN_OBSERVATION: {
                  idx: 1,
                  desc: 'Specimen Observation',
                  segments: {
                    OBX: {
                      idx: 0,
                      min: 1,
                      max: 1,
                      desc: 'Observation/Result related to specimen',
                    },
                    PRT: {
                      idx: 1,
                      desc: 'Participation (for Specimen Observation)',
                    },
                  },
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
                    CONTAINER_OBSERVATION: {
                      idx: 1,
                      desc: 'Container Observation',
                      segments: {
                        OBX: {
                          idx: 0,
                          min: 1,
                          max: 1,
                          desc: 'Observation/Result related to container',
                        },
                        PRT: {
                          idx: 1,
                          desc: 'Participation (for Container Observation)',
                        },
                      },
                    },
                  },
                },
              },
            },
            PRIOR_RESULT: {
              idx: 8,
              desc: 'Prior Result',
              segments: {
                PATIENT_PRIOR: {
                  idx: 0,
                  max: 1,
                  desc: 'Patient Prior',
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
                    PRT: {
                      idx: 2,
                      desc: 'Participation (for Patient Prior)',
                    },
                  },
                },
                PATIENT_VISIT_PRIOR: {
                  idx: 1,
                  max: 1,
                  desc: 'Patient Visit Prior',
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
                    PRT: {
                      idx: 2,
                      desc: 'Participation (for Patient Visit Prior)',
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
                  desc: 'Order Prior',
                  segments: {
                    ORC: {
                      idx: 0,
                      min: 1,
                      max: 1,
                      desc: 'Common Order            - previous result',
                    },
                    OBR: {
                      idx: 1,
                      min: 1,
                      max: 1,
                      desc: 'Order Detail            - previous result',
                    },
                    NTE: {
                      idx: 2,
                      desc: 'Notes and Comments      - previous result',
                    },
                    PRT: {
                      idx: 3,
                      desc: 'Participation (for Order Prior)',
                    },
                    TIMING_PRIOR: {
                      idx: 4,
                      desc: 'Timing Prior',
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
                    OBSERVATION_PRIOR: {
                      idx: 5,
                      min: 1,
                      desc: 'Observation Prior',
                      segments: {
                        OBX: {
                          idx: 0,
                          min: 1,
                          max: 1,
                          desc: 'Observation/Result      - previous result',
                        },
                        PRT: {
                          idx: 1,
                          desc: 'Participation (for Observation Prior)',
                        },
                        NTE: {
                          idx: 2,
                          desc: 'Notes and Comments      - previous result',
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
          idx: 4,
          desc: 'Financial Transaction',
        },
        CTI: {
          idx: 5,
          desc: 'Clinical Trial Identification',
        },
        BLG: {
          idx: 6,
          max: 1,
          desc: 'Billing Segment',
        },
      },
    },
  },
};

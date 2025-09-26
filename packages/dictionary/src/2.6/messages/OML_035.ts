import { HL7MessageDefinition } from '../../types.js';

export const OML_035: HL7MessageDefinition = {
  desc: 'Laboratory order for multiple orders related to a single container of a specimen',
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
    SPECIMEN: {
      idx: 5,
      min: 1,
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
          desc: 'Observations related to specimen',
        },
        SPECIMEN_CONTAINER: {
          idx: 2,
          min: 1,
          desc: 'Specimen container',
          segments: {
            SAC: {
              idx: 0,
              min: 1,
              max: 1,
              desc: 'Specimen Container',
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
                OBSERVATION_REQUEST: {
                  idx: 2,
                  max: 1,
                  desc: 'Observation request',
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
                    ROL: {
                      idx: 3,
                      desc: 'Role (for Observation)',
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
                          desc: 'Observation/Result',
                        },
                        TCD: {
                          idx: 1,
                          max: 1,
                          desc: 'Test Code Detail',
                        },
                        NTE: {
                          idx: 2,
                          desc: 'Notes and Comments (for Results)',
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
                            NTE: {
                              idx: 2,
                              desc: 'Notes and Comments      - previous result',
                            },
                            ROL: {
                              idx: 3,
                              desc: 'Role (for Observation)',
                            },
                            TIMING_PRIOR: {
                              idx: 4,
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
                            OBSERVATION_PRIOR: {
                              idx: 5,
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
                  },
                },
                FT1: {
                  idx: 3,
                  desc: 'Financial Transaction',
                },
                CTI: {
                  idx: 4,
                  desc: 'Clinical Trial Identification',
                },
                BLG: {
                  idx: 5,
                  max: 1,
                  desc: 'Billing Segment',
                },
              },
            },
          },
        },
      },
    },
  },
};

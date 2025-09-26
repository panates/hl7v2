import { HL7MessageDefinition } from '../../types.js';

export const OPL_O37: HL7MessageDefinition = {
  desc: 'Population/Location-Based Laboratory Order Message',
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
      desc: 'Notes and Comments (for header)',
    },
    PRT: {
      idx: 4,
      min: 1,
      desc: 'Participation',
    },
    GUARANTOR: {
      idx: 5,
      max: 1,
      desc: 'Guarantor',
      segments: {
        GT1: {
          idx: 0,
          min: 1,
          max: 1,
          desc: 'Guarantor',
        },
        NTE: {
          idx: 1,
          desc: 'Notes and Comments (for Guarantor)',
        },
      },
    },
    ORDER: {
      idx: 6,
      min: 1,
      desc: 'Order',
      segments: {
        NK1: {
          idx: 0,
          min: 1,
          desc: 'Next of Kin/Associated Parties',
        },
        PATIENT: {
          idx: 1,
          max: 1,
          desc: 'Patient',
          segments: {
            PID: {
              idx: 0,
              min: 1,
              max: 1,
              desc: 'Patient',
            },
            PD1: {
              idx: 1,
              max: 1,
              desc: 'Patient Additional Demographics',
            },
            PRT: {
              idx: 2,
              desc: 'Participation (for Patient)',
            },
            OBSERVATIONS_ON_PATIENT: {
              idx: 3,
              desc: 'Observations On Patient',
              segments: {
                OBX: {
                  idx: 0,
                  min: 1,
                  max: 1,
                  desc: 'Observations on the Patient',
                },
                PRT: {
                  idx: 1,
                  desc: 'Participation (for Observations on Patient)',
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
                  desc: 'Insurance Additional Information',
                },
                IN3: {
                  idx: 2,
                  max: 1,
                  desc: 'Insurance Additional Information, Certification',
                },
              },
            },
            AL1: {
              idx: 5,
              desc: 'Allergy Information',
            },
          },
        },
        SPECIMEN: {
          idx: 2,
          min: 1,
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
                      desc: 'Participation (for Containter Observation)',
                    },
                  },
                },
              },
            },
            OBSERVATION_REQUEST: {
              idx: 3,
              min: 1,
              desc: 'Observation Request',
              segments: {
                ORC: {
                  idx: 0,
                  min: 1,
                  max: 1,
                  desc: 'Common Order',
                },
                OBR: {
                  idx: 1,
                  min: 1,
                  max: 1,
                  desc: 'Observation Request',
                },
                PRT: {
                  idx: 2,
                  desc: 'Participation (for Observation Request)',
                },
                TIMING: {
                  idx: 3,
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
                TCD: {
                  idx: 4,
                  max: 1,
                  desc: 'Test Code Details',
                },
                DG1: {
                  idx: 5,
                  desc: 'Diagnosis',
                },
                ORDER_RELATED_OBSERVATION: {
                  idx: 6,
                  desc: 'Order Related Observation',
                  segments: {
                    OBX: {
                      idx: 0,
                      min: 1,
                      max: 1,
                      desc: 'Observation/Result Related to Order',
                    },
                    PRT: {
                      idx: 1,
                      desc: 'Participation (for Order Related Observation)',
                    },
                  },
                },
              },
            },
          },
        },
        PRIOR_RESULT: {
          idx: 3,
          max: 1,
          desc: 'Prior Result',
          segments: {
            NK1: {
              idx: 0,
              min: 1,
              desc: 'Next of Kin/Associated Parties',
            },
            PATIENT_PRIOR: {
              idx: 1,
              max: 1,
              desc: 'Patient Prior',
              segments: {
                PID: {
                  idx: 0,
                  min: 1,
                  max: 1,
                  desc: 'Patient',
                },
                PD1: {
                  idx: 1,
                  max: 1,
                  desc: 'Patient Additional Demographics',
                },
                PRT: {
                  idx: 2,
                  desc: 'Participation (for Patient Prior)',
                },
              },
            },
            PATIENT_VISIT_PRIOR: {
              idx: 2,
              max: 1,
              desc: 'Patient Visit Prior',
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
                  desc: 'Patient Visit - Additional Information',
                },
                PRT: {
                  idx: 2,
                  desc: 'Participation (for Patient Visit Prior)',
                },
              },
            },
            AL1: {
              idx: 3,
              max: 1,
              desc: 'Patient Allergy Information',
            },
            ORDER_PRIOR: {
              idx: 4,
              min: 1,
              desc: 'Order Prior',
              segments: {
                OBR: {
                  idx: 0,
                  min: 1,
                  max: 1,
                  desc: 'Observation Request',
                },
                ORC: {
                  idx: 1,
                  max: 1,
                  desc: 'COMMON_ORDER',
                },
                PRT: {
                  idx: 2,
                  desc: 'Participation (for Order Prior)',
                },
                TIMING: {
                  idx: 3,
                  max: 1,
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
                      desc: 'Timing/Quantity Relationship',
                    },
                  },
                },
                'Observation/Result_Group': {
                  idx: 4,
                  min: 1,
                  desc: 'Observation/result Group',
                  segments: {
                    OBX: {
                      idx: 0,
                      min: 1,
                      max: 1,
                      desc: 'Observation/Result for prior order',
                    },
                    PRT: {
                      idx: 1,
                      desc: 'Participation (for Observation/Result)',
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

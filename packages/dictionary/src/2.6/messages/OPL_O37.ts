import { HL7MessageDefinition } from '../../types.js';

export const OPL_O37: HL7MessageDefinition = {
  desc: 'Population/Location-Based Laboratory Order',
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
    ROL: {
      idx: 4,
      min: 1,
      desc: 'Role',
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
            OBX: {
              idx: 2,
              desc: 'Observations on the Patient',
            },
            INSURANCE: {
              idx: 3,
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
              idx: 4,
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
            OBX: {
              idx: 1,
              desc: 'Observation/Result related to specimen',
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
                  desc: 'Observation/Result related to container',
                },
              },
            },
            OBSERVATION_REQUEST: {
              idx: 3,
              min: 1,
              desc: 'Observation request',
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
                ROL: {
                  idx: 2,
                  desc: 'Role (for Observation)',
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
                OBX: {
                  idx: 6,
                  desc: 'Observation/Result Related to Order',
                },
              },
            },
          },
        },
        PRIOR_RESULT: {
          idx: 3,
          max: 1,
          desc: 'Prior result',
          segments: {
            NK1: {
              idx: 0,
              min: 1,
              desc: 'Next of Kin/Associated Parties',
            },
            PATIENT_PRIOR: {
              idx: 1,
              max: 1,
              desc: 'Patient prior',
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
              },
            },
            PATIENT_VISIT_PRIOR: {
              idx: 2,
              max: 1,
              desc: 'Patient visit prior',
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
              desc: 'Order prior',
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
                  desc: 'Common Order',
                },
                ROL: {
                  idx: 2,
                  desc: 'Role (for Observation)',
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
                OBX: {
                  idx: 4,
                  min: 1,
                  desc: 'Observation/Result for prior order',
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

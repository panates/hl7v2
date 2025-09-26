import { HL7MessageDefinition } from '../../types.js';

export const EHC_E01: HL7MessageDefinition = {
  desc: 'Submit HealthCare Services Invoice',
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
      desc: 'User Authentication Credential',
    },
    INVOICE_INFORMATION: {
      idx: 3,
      min: 1,
      max: 1,
      desc: 'Invoice Information',
      segments: {
        IVC: {
          idx: 0,
          min: 1,
          max: 1,
          desc: 'Invoice',
        },
        PYE: {
          idx: 1,
          max: 1,
          desc: 'Payee Information',
        },
        CTD: {
          idx: 2,
          desc: 'Contact Data',
        },
        AUT: {
          idx: 3,
          max: 1,
          desc: 'Authorization Information',
        },
        LOC: {
          idx: 4,
          desc: 'Location Identification',
        },
        ROL: {
          idx: 5,
          desc: 'Role',
        },
        PRODUCT_SERVICE_SECTION: {
          idx: 6,
          min: 1,
          desc: 'Product Service Section',
          segments: {
            PSS: {
              idx: 0,
              min: 1,
              max: 1,
              desc: 'Product/Service Section',
            },
            PRODUCT_SERVICE_GROUP: {
              idx: 1,
              min: 1,
              desc: 'Product Service Group',
              segments: {
                PSG: {
                  idx: 0,
                  min: 1,
                  max: 1,
                  desc: 'Product/Service Group',
                },
                LOC: {
                  idx: 1,
                  desc: 'Location Identification',
                },
                ROL: {
                  idx: 2,
                  desc: 'Role',
                },
                PATIENT_INFO: {
                  idx: 3,
                  desc: 'Patient Info',
                  segments: {
                    PID: {
                      idx: 0,
                      min: 1,
                      max: 1,
                      desc: 'Person Identification',
                    },
                    PV1: {
                      idx: 1,
                      max: 1,
                      desc: 'Patient Visit',
                    },
                    PV2: {
                      idx: 2,
                      max: 1,
                      desc: 'Patient Visit - Additional Info',
                    },
                    ACC: {
                      idx: 3,
                      desc: 'Accident',
                    },
                    INSURANCE: {
                      idx: 4,
                      min: 1,
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
                          desc: 'Insurance Additional Info',
                        },
                      },
                    },
                    DIAGNOSIS: {
                      idx: 5,
                      desc: 'Diagnosis',
                      segments: {
                        DG1: {
                          idx: 0,
                          min: 1,
                          max: 1,
                          desc: 'Diagnosis',
                        },
                        NTE: {
                          idx: 1,
                          desc: 'Notes and Comments',
                        },
                      },
                    },
                    OBX: {
                      idx: 6,
                      desc: 'Observation',
                    },
                  },
                },
                PRODUCT_SERVICE_LINE_ITEM: {
                  idx: 4,
                  min: 1,
                  desc: 'Product Service Line Item',
                  segments: {
                    PSL: {
                      idx: 0,
                      min: 1,
                      max: 1,
                      desc: 'Product/Service Line Item',
                    },
                    NTE: {
                      idx: 1,
                      desc: 'Notes and Comments',
                    },
                    ADJ: {
                      idx: 2,
                      desc: 'Adjustment',
                    },
                    AUT: {
                      idx: 3,
                      max: 1,
                      desc: 'Authorization Information',
                    },
                    LOC: {
                      idx: 4,
                      desc: 'Location Identification',
                    },
                    ROL: {
                      idx: 5,
                      desc: 'Role',
                    },
                  },
                },
                PROCEDURE: {
                  idx: 5,
                  desc: 'Procedure',
                  segments: {
                    PR1: {
                      idx: 0,
                      min: 1,
                      max: 1,
                      desc: 'Procedures',
                    },
                    NTE: {
                      idx: 1,
                      desc: 'Notes and Comments',
                    },
                    ROL: {
                      idx: 2,
                      desc: 'Role',
                    },
                  },
                },
                INVOICE_PROCESSING: {
                  idx: 6,
                  desc: 'Invoice Processing',
                  segments: {
                    IPR: {
                      idx: 0,
                      min: 1,
                      max: 1,
                      desc: 'Invoice Processing Results',
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

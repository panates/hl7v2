import { HL7MessageDefinition } from '../../types.js';

export const OSM_R26: HL7MessageDefinition = {
  desc: 'Unsolicited Specimen Shipment Manifest Message',
  segments: {
    MSH: {
      idx: 0,
      min: 1,
      max: 1,
      desc: 'Message Header',
    },
    SFT: {
      idx: 1,
      desc: 'Software Segment',
    },
    UAC: {
      idx: 2,
      max: 1,
      desc: 'User Authentication Credential',
    },
    SHIPMENT: {
      idx: 3,
      min: 1,
      desc: 'Shipment',
      segments: {
        SHP: {
          idx: 0,
          min: 1,
          max: 1,
          desc: 'Shipment Segment',
        },
        PRT: {
          idx: 1,
          min: 1,
          desc: 'Participation (for Shipment)',
        },
        SHIPPING_OBSERVATION: {
          idx: 2,
          desc: 'Shipping Observation',
          segments: {
            OBX: {
              idx: 0,
              min: 1,
              max: 1,
              desc: 'Observation/Result Segment (Additional Shipping Information)',
            },
            PRT: {
              idx: 1,
              desc: 'Participation (for Shipping Observation)',
            },
          },
        },
        PACKAGE: {
          idx: 3,
          min: 1,
          desc: 'Package',
          segments: {
            PAC: {
              idx: 0,
              min: 1,
              max: 1,
              desc: 'Shipping Package Segment',
            },
            PRT: {
              idx: 1,
              desc: 'Participation (for Shipping Package)',
            },
            SPECIMEN: {
              idx: 2,
              desc: 'Specimen',
              segments: {
                SPM: {
                  idx: 0,
                  min: 1,
                  max: 1,
                  desc: 'Specimen Information',
                },
                PRT: {
                  idx: 1,
                  desc: 'Participation (for Specimen)',
                },
                SPECIMEN_OBSERVATION: {
                  idx: 2,
                  desc: 'Specimen Observation',
                  segments: {
                    OBX: {
                      idx: 0,
                      min: 1,
                      max: 1,
                      desc: 'Observation/Result Segment (For Specimen)',
                    },
                    PRT: {
                      idx: 1,
                      desc: 'Participation (for Specimen Observation)',
                    },
                  },
                },
                CONTAINER: {
                  idx: 3,
                  desc: 'Container',
                  segments: {
                    SAC: {
                      idx: 0,
                      min: 1,
                      max: 1,
                      desc: 'Container Information',
                    },
                    CONTAINER_OBSERVATION: {
                      idx: 1,
                      desc: 'Container Observation',
                      segments: {
                        OBX: {
                          idx: 0,
                          min: 1,
                          max: 1,
                          desc: 'Observation/Result Segment (For Container)',
                        },
                        PRT: {
                          idx: 1,
                          desc: 'Participation (for Observation Result)',
                        },
                      },
                    },
                  },
                },
                'SUBJECT_PERSON/ANIMAL_IDENTIFICATION': {
                  idx: 4,
                  max: 1,
                  desc: 'Subject Person/animal Identification',
                  segments: {
                    PID: {
                      idx: 0,
                      min: 1,
                      max: 1,
                      desc: 'Patient Identification (For Person/Animal)',
                    },
                    PRT: {
                      idx: 1,
                      desc: 'Participation (for Patient)',
                    },
                    PATIENT_OBSERVATION: {
                      idx: 2,
                      desc: 'Patient Observation',
                      segments: {
                        OBX: {
                          idx: 0,
                          min: 1,
                          max: 1,
                          desc: 'Observation/Result Segment (For Patient)',
                        },
                        PRT: {
                          idx: 1,
                          desc: 'Participation (for Observation)',
                        },
                      },
                    },
                    NK1: {
                      idx: 3,
                      desc: 'Next of Kin/Associated Parties (For Person/Animal)',
                    },
                  },
                },
                'SUBJECT_POPULATION/LOCATION_IDENTIFICATION': {
                  idx: 5,
                  max: 1,
                  desc: 'Subject Population/location Identification',
                  segments: {
                    PV1: {
                      idx: 0,
                      min: 1,
                      max: 1,
                      desc: 'Patient Visit (For Population/Location)',
                    },
                    PRT: {
                      idx: 4,
                      desc: 'Participation (for Patient)',
                    },
                    PATIENT_VISIT_OBSERVATION: {
                      idx: 2,
                      desc: 'Patient Visit Observation',
                      segments: {
                        OBX: {
                          idx: 0,
                          min: 1,
                          max: 1,
                          desc: 'Observation/Result Segment (For Visit)',
                        },
                        PRT: {
                          idx: 1,
                          desc: 'Participation (for Patient Visit Observation)',
                        },
                      },
                    },
                    PID: {
                      idx: 3,
                      max: 1,
                      desc: 'Patient Identification (For Population)',
                    },
                    NK1: {
                      idx: 5,
                      desc: 'Next of Kin/Associated Parties (For Population/Location)',
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

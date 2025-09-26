import { HL7MessageDefinition } from '../../types.js';

export const ORL_O40: HL7MessageDefinition = {
  desc: 'Specimen Shipment Centric Laboratory Order Acknowledgment Message',
  segments: {
    MSH: {
      idx: 0,
      min: 1,
      max: 1,
      desc: 'Message Header',
    },
    MSA: {
      idx: 1,
      min: 1,
      max: 1,
      desc: 'Message Acknowledgment',
    },
    ERR: {
      idx: 2,
      desc: 'Error',
    },
    SFT: {
      idx: 3,
      desc: 'Software',
    },
    UAC: {
      idx: 4,
      max: 1,
      desc: 'User Authentication Credential',
    },
    NTE: {
      idx: 5,
      desc: 'Notes and Comments (for Header)',
    },
    RESPONSE: {
      idx: 6,
      max: 1,
      desc: 'Response',
      segments: {
        PATIENT: {
          idx: 0,
          max: 1,
          desc: 'Patient',
          segments: {
            PID: {
              idx: 0,
              min: 1,
              max: 1,
              desc: 'Patient Identification',
            },
            PRT: {
              idx: 1,
              desc: 'Participation (for Patient)',
            },
            ORDER: {
              idx: 2,
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
                  desc: 'Participation (for Order)',
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
                    PRT: {
                      idx: 1,
                      desc: 'Participation (for Observation Request)',
                    },
                    SPECIMEN_SHIPMENT: {
                      idx: 2,
                      desc: 'Specimen Shipment',
                      segments: {
                        SHP: {
                          idx: 0,
                          min: 1,
                          max: 1,
                          desc: 'Shipment Segment',
                        },
                        PACKAGE: {
                          idx: 1,
                          min: 1,
                          desc: 'Package',
                          segments: {
                            PAC: {
                              idx: 0,
                              min: 1,
                              max: 1,
                              desc: 'Shipping Package Segment',
                            },
                            SPECIMEN_IN_PACKAGE: {
                              idx: 1,
                              desc: 'Specimen In Package',
                              segments: {
                                SPM: {
                                  idx: 0,
                                  min: 1,
                                  max: 1,
                                  desc: 'Specimen Information',
                                },
                                SPECIMEN_CONTAINER_IN_PACKAGE: {
                                  idx: 1,
                                  desc: 'Specimen Container In Package',
                                  segments: {
                                    SAC: {
                                      idx: 0,
                                      min: 1,
                                      max: 1,
                                      desc: 'Container Information',
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
                },
              },
            },
          },
        },
      },
    },
  },
};

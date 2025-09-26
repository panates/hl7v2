import { HL7MessageDefinition } from '../../types.js';

export const PEX_P07: HL7MessageDefinition = {
  desc: 'Unsolicited initial individual product experience report',
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
    EVN: {
      idx: 3,
      min: 1,
      max: 1,
      desc: 'Event Type',
    },
    PID: {
      idx: 4,
      min: 1,
      max: 1,
      desc: 'Patient Identification',
    },
    PD1: {
      idx: 5,
      max: 1,
      desc: 'Additional Demographics',
    },
    NTE: {
      idx: 6,
      desc: 'Notes and comments',
    },
    VISIT: {
      idx: 7,
      max: 1,
      desc: 'Visit',
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
          desc: 'Patient Visit - Additional Info',
        },
      },
    },
    EXPERIENCE: {
      idx: 8,
      min: 1,
      desc: 'Experience',
      segments: {
        PES: {
          idx: 0,
          min: 1,
          max: 1,
          desc: 'Product Experience Sender',
        },
        PEX_OBSERVATION: {
          idx: 1,
          min: 1,
          desc: 'Pex observation',
          segments: {
            PEO: {
              idx: 0,
              min: 1,
              max: 1,
              desc: 'Product Experience Observation',
            },
            PEX_CAUSE: {
              idx: 1,
              min: 1,
              desc: 'Pex cause',
              segments: {
                PCR: {
                  idx: 0,
                  min: 1,
                  max: 1,
                  desc: 'Potential Causal Relationship',
                },
                RX_ORDER: {
                  idx: 1,
                  max: 1,
                  desc: 'Rx order',
                  segments: {
                    RXE: {
                      idx: 0,
                      min: 1,
                      max: 1,
                      desc: 'Pharmacy/Treatment Encoded Order',
                    },
                    TIMING_QTY: {
                      idx: 1,
                      min: 1,
                      desc: 'Timing qty',
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
                    RXR: {
                      idx: 2,
                      desc: 'Pharmacy/Treatment Route',
                    },
                  },
                },
                RX_ADMINISTRATION: {
                  idx: 2,
                  desc: 'Rx administration',
                  segments: {
                    RXA: {
                      idx: 0,
                      min: 1,
                      max: 1,
                      desc: 'Pharmacy/Treatment Administration',
                    },
                    RXR: {
                      idx: 1,
                      max: 1,
                      desc: 'Pharmacy/Treatment Route',
                    },
                  },
                },
                PRB: {
                  idx: 3,
                  desc: 'Detail problem segment',
                },
                OBX: {
                  idx: 4,
                  desc: 'Observation/Result Segment',
                },
                NTE: {
                  idx: 5,
                  desc: 'Notes and comments',
                },
                ASSOCIATED_PERSON: {
                  idx: 6,
                  max: 1,
                  desc: 'Associated person',
                  segments: {
                    NK1: {
                      idx: 0,
                      min: 1,
                      max: 1,
                      desc: 'Associated parties segment',
                    },
                    ASSOCIATED_RX_ORDER: {
                      idx: 1,
                      max: 1,
                      desc: 'Associated rx order',
                      segments: {
                        RXE: {
                          idx: 0,
                          min: 1,
                          max: 1,
                          desc: 'Pharmacy/Treatment Encoded Order',
                        },
                        NK1_TIMING_QTY: {
                          idx: 1,
                          min: 1,
                          desc: 'Nk1 timing qty',
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
                        RXR: {
                          idx: 2,
                          desc: 'Pharmacy/Treatment Route',
                        },
                      },
                    },
                    ASSOCIATED_RX_ADMIN: {
                      idx: 2,
                      desc: 'Associated rx admin',
                      segments: {
                        RXA: {
                          idx: 0,
                          min: 1,
                          max: 1,
                          desc: 'Pharmacy/Treatment Administration',
                        },
                        RXR: {
                          idx: 1,
                          max: 1,
                          desc: 'Pharmacy/Treatment Route',
                        },
                      },
                    },
                    PRB: {
                      idx: 3,
                      desc: 'Detail Problem Segment',
                    },
                    OBX: {
                      idx: 4,
                      desc: 'Observation/Results Segment',
                    },
                  },
                },
                STUDY: {
                  idx: 7,
                  desc: 'Study',
                  segments: {
                    CSR: {
                      idx: 0,
                      min: 1,
                      max: 1,
                      desc: 'Clinical study registration',
                    },
                    CSP: {
                      idx: 1,
                      desc: 'Clinical study phase segment',
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

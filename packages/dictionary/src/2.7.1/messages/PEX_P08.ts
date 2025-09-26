import { HL7MessageDefinition } from '../../types.js';

export const PEX_P08: HL7MessageDefinition = {
  desc: 'Unsolicited update individual product experience report',
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
    PRT: {
      idx: 6,
      desc: 'Participation (for Patient)',
    },
    NTE: {
      idx: 7,
      desc: 'Notes and comments',
    },
    VISIT: {
      idx: 8,
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
        PRT: {
          idx: 2,
          desc: 'Participation (for Patient Visit)',
        },
      },
    },
    EXPERIENCE: {
      idx: 9,
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
          desc: 'Pex Observation',
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
              desc: 'Pex Cause',
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
                  desc: 'Rx Order',
                  segments: {
                    RXE: {
                      idx: 0,
                      min: 1,
                      max: 1,
                      desc: 'Pharmacy/Treatment Encoded Order',
                    },
                    PRT: {
                      idx: 1,
                      desc: 'Participation (for Pharmacy/Treatment)',
                    },
                    TIMING_QTY: {
                      idx: 2,
                      min: 1,
                      desc: 'Timing Qty',
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
                      idx: 3,
                      desc: 'Pharmacy/Treatment Route',
                    },
                  },
                },
                RX_ADMINISTRATION: {
                  idx: 2,
                  desc: 'Rx Administration',
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
                    PRT: {
                      idx: 2,
                      desc: 'Participation (for Pharmacy Administration)',
                    },
                  },
                },
                PRB: {
                  idx: 3,
                  desc: 'Detail problem segment',
                },
                OBSERVATION: {
                  idx: 4,
                  desc: 'Observation',
                  segments: {
                    OBX: {
                      idx: 0,
                      min: 1,
                      max: 1,
                      desc: 'Observation/Result Segment',
                    },
                    PRT: {
                      idx: 1,
                      desc: 'Participation (for Observation Result)',
                    },
                  },
                },
                NTE: {
                  idx: 5,
                  desc: 'Notes and comments',
                },
                ASSOCIATED_PERSON: {
                  idx: 6,
                  max: 1,
                  desc: 'Associated Person',
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
                      desc: 'Associated Rx Order',
                      segments: {
                        RXE: {
                          idx: 0,
                          min: 1,
                          max: 1,
                          desc: 'Pharmacy/Treatment Encoded Order',
                        },
                        PRT: {
                          idx: 1,
                          desc: 'Participation (for Pharmacy/Treatment)',
                        },
                        NK1_TIMING_QTY: {
                          idx: 2,
                          min: 1,
                          desc: 'Nk1 Timing Qty',
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
                          idx: 3,
                          desc: 'Pharmacy/Treatment Route',
                        },
                      },
                    },
                    ASSOCIATED_RX_ADMIN: {
                      idx: 2,
                      desc: 'Associated Rx Admin',
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
                        PRT: {
                          idx: 2,
                          desc: 'Participation (for Pharmacy Administration)',
                        },
                      },
                    },
                    PRB: {
                      idx: 3,
                      desc: 'Detail Problem Segment',
                    },
                    ASSOCIATED_OBSERVATION: {
                      idx: 4,
                      desc: 'Associated Observation',
                      segments: {
                        OBX: {
                          idx: 0,
                          min: 1,
                          max: 1,
                          desc: 'Observation/Results Segment',
                        },
                        PRT: {
                          idx: 1,
                          desc: 'Participation (for Observation Result)',
                        },
                      },
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

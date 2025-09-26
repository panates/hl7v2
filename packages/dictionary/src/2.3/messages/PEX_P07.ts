import { HL7MessageDefinition } from '../../types.js';

export const PEX_P07: HL7MessageDefinition = {
  desc: 'Unsolicited initial individual product experience report',
  segments: {
    MSH: {
      idx: 0,
      min: 1,
      max: 1,
      desc: 'Message header segment',
    },
    EVN: {
      idx: 1,
      min: 1,
      max: 1,
      desc: 'Event type',
    },
    PID: {
      idx: 2,
      min: 1,
      max: 1,
      desc: 'Patient identification',
    },
    PD1: {
      idx: 3,
      max: 1,
      desc: 'Patient demographic',
    },
    NTE: {
      idx: 4,
      desc: 'Notes and comments segment',
    },
    VISIT: {
      idx: 5,
      max: 1,
      desc: 'Visit',
      segments: {
        PV1: {
          idx: 0,
          min: 1,
          max: 1,
          desc: 'Patient visit',
        },
        PV2: {
          idx: 1,
          max: 1,
          desc: 'Patient visit - additional information',
        },
      },
    },
    EXPERIENCE: {
      idx: 6,
      min: 1,
      desc: 'Experience',
      segments: {
        PES: {
          idx: 0,
          min: 1,
          max: 1,
          desc: 'Product experience sender',
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
              desc: 'Product experience observation',
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
                  desc: 'Possible causal relationship',
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
                      desc: 'Pharmacy encoded order segment',
                    },
                    RXR: {
                      idx: 1,
                      desc: 'Pharmacy route segment',
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
                      desc: 'Pharmacy administration segment',
                    },
                    RXR: {
                      idx: 1,
                      max: 1,
                      desc: 'Pharmacy route segment',
                    },
                  },
                },
                PRB: {
                  idx: 3,
                  desc: 'Problem detail',
                },
                OBX: {
                  idx: 4,
                  desc: 'Observation segment',
                },
                NTE: {
                  idx: 5,
                  desc: 'Notes and comments segment',
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
                      desc: 'Next of kin',
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
                          desc: 'Pharmacy encoded order segment',
                        },
                        RXR: {
                          idx: 1,
                          desc: 'Pharmacy route segment',
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
                          desc: 'Pharmacy administration segment',
                        },
                        RXR: {
                          idx: 1,
                          max: 1,
                          desc: 'Pharmacy route segment',
                        },
                      },
                    },
                    PRB: {
                      idx: 3,
                      desc: 'Problem detail',
                    },
                    OBX: {
                      idx: 4,
                      desc: 'Observation segment',
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
                      desc: 'Clinical study phase',
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

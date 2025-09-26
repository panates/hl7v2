import { HL7MessageDefinition } from '../../types.js';

export const PEX_P07: HL7MessageDefinition = {
  desc: 'Unsolicited initial individual product experience report',
  segments: {
    MSH: {
      idx: 0,
      min: 1,
      max: 1,
      desc: 'MSH - message header segment',
    },
    EVN: {
      idx: 1,
      min: 1,
      max: 1,
      desc: 'EVN - event type segment',
    },
    PID: {
      idx: 2,
      min: 1,
      max: 1,
      desc: 'PID - patient identification segment',
    },
    PD1: {
      idx: 3,
      max: 1,
      desc: 'Patient Additional Demographic',
    },
    NTE: {
      idx: 4,
      desc: 'NTE - notes and comments segment',
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
          desc: 'PV1 - patient visit segment-',
        },
        PV2: {
          idx: 1,
          max: 1,
          desc: 'PV2 - patient visit - additional information segment',
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
          desc: 'PES - product experience sender segment',
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
              desc: 'PEO - product experience observation segment',
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
                  desc: 'PCR - possible causal relationship segment',
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
                      desc: 'RXE - pharmacy/treatment encoded order segment',
                    },
                    RXR: {
                      idx: 1,
                      desc: 'RXR - pharmacy/treatment route segment',
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
                      desc: 'RXA - pharmacy/treatment administration segment',
                    },
                    RXR: {
                      idx: 1,
                      max: 1,
                      desc: 'RXR - pharmacy/treatment route segment',
                    },
                  },
                },
                PRB: {
                  idx: 3,
                  desc: 'Problem Detail',
                },
                OBX: {
                  idx: 4,
                  desc: 'OBX - observation/result segment',
                },
                NTE: {
                  idx: 5,
                  desc: 'NTE - notes and comments segment',
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
                      desc: 'NK1 - next of kin / associated parties segment-',
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
                          desc: 'RXE - pharmacy/treatment encoded order segment',
                        },
                        RXR: {
                          idx: 1,
                          desc: 'RXR - pharmacy/treatment route segment',
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
                          desc: 'RXA - pharmacy/treatment administration segment',
                        },
                        RXR: {
                          idx: 1,
                          max: 1,
                          desc: 'RXR - pharmacy/treatment route segment',
                        },
                      },
                    },
                    PRB: {
                      idx: 3,
                      desc: 'Problem Detail',
                    },
                    OBX: {
                      idx: 4,
                      desc: 'OBX - observation/result segment',
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
                      desc: 'CSR - clinical study registration segment',
                    },
                    CSP: {
                      idx: 1,
                      desc: 'CSP - clinical study phase segment',
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

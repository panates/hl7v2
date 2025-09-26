import { HL7MessageDefinition } from '../../types.js';

export const CSU_C10: HL7MessageDefinition = {
  desc: 'Patient completes the clinical trial',
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
    PATIENT: {
      idx: 3,
      min: 1,
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
        PRT: {
          idx: 2,
          desc: 'Participation (for Patient)',
        },
        NTE: {
          idx: 3,
          desc: 'Notes and comments',
        },
        VISIT: {
          idx: 4,
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
        CSR: {
          idx: 5,
          min: 1,
          max: 1,
          desc: 'Clinical Study Registration',
        },
        STUDY_PHASE: {
          idx: 6,
          min: 1,
          desc: 'Study Phase',
          segments: {
            CSP: {
              idx: 0,
              max: 1,
              desc: 'Clinical Study Phase',
            },
            STUDY_SCHEDULE: {
              idx: 1,
              min: 1,
              desc: 'Study Schedule',
              segments: {
                CSS: {
                  idx: 0,
                  max: 1,
                  desc: 'Clinical Study Data Schedule',
                },
                STUDY_OBSERVATION: {
                  idx: 1,
                  min: 1,
                  desc: 'Study Observation',
                  segments: {
                    ORC: {
                      idx: 0,
                      max: 1,
                      desc: 'COMMON_ORDER',
                    },
                    OBR: {
                      idx: 1,
                      min: 1,
                      max: 1,
                      desc: 'Observation Battery',
                    },
                    PRT: {
                      idx: 5,
                      desc: 'Participaton (for Observation Results)',
                    },
                    TIMING_QTY: {
                      idx: 3,
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
                    OBX: {
                      idx: 4,
                      min: 1,
                      max: 1,
                      desc: 'Observation Results',
                    },
                  },
                },
                STUDY_PHARM: {
                  idx: 2,
                  min: 1,
                  desc: 'Study Pharm',
                  segments: {
                    COMMON_ORDER: {
                      idx: 0,
                      max: 1,
                      desc: 'Common Order',
                      segments: {
                        ORC: {
                          idx: 0,
                          min: 1,
                          max: 1,
                          desc: 'COMMON_ORDER',
                        },
                        PRT: {
                          idx: 1,
                          desc: 'Participation (for COMMON_ORDER)',
                        },
                      },
                    },
                    RX_ADMIN: {
                      idx: 1,
                      min: 1,
                      desc: 'Rx Admin',
                      segments: {
                        RXA: {
                          idx: 0,
                          min: 1,
                          max: 1,
                          desc: 'Pharmacy Administration',
                        },
                        RXR: {
                          idx: 1,
                          min: 1,
                          max: 1,
                          desc: 'Pharmacy Route',
                        },
                        PRT: {
                          idx: 2,
                          desc: 'Participation (for Pharmacy Administration)',
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

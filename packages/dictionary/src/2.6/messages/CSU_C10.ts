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
        NTE: {
          idx: 2,
          desc: 'Notes and comments',
        },
        VISIT: {
          idx: 3,
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
        CSR: {
          idx: 4,
          min: 1,
          max: 1,
          desc: 'Clinical Study Registration',
        },
        STUDY_PHASE: {
          idx: 5,
          min: 1,
          desc: 'Study phase',
          segments: {
            CSP: {
              idx: 0,
              max: 1,
              desc: 'Clinical Study Phase',
            },
            STUDY_SCHEDULE: {
              idx: 1,
              min: 1,
              desc: 'Study schedule',
              segments: {
                CSS: {
                  idx: 0,
                  max: 1,
                  desc: 'Clinical Study Data Schedule',
                },
                STUDY_OBSERVATION: {
                  idx: 1,
                  min: 1,
                  desc: 'Study observation',
                  segments: {
                    ORC: {
                      idx: 0,
                      max: 1,
                      desc: 'Common Order',
                    },
                    OBR: {
                      idx: 1,
                      min: 1,
                      max: 1,
                      desc: 'Observation Battery',
                    },
                    ROL: {
                      idx: 2,
                      desc: 'Role (for observation)',
                    },
                    TIMING_QTY: {
                      idx: 3,
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
                    OBX: {
                      idx: 4,
                      min: 1,
                      desc: 'Observation Results',
                    },
                  },
                },
                STUDY_PHARM: {
                  idx: 2,
                  min: 1,
                  desc: 'Study pharm',
                  segments: {
                    ORC: {
                      idx: 0,
                      max: 1,
                      desc: 'Common Order',
                    },
                    RX_ADMIN: {
                      idx: 1,
                      min: 1,
                      desc: 'Rx admin',
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

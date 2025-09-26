import { HL7MessageDefinition } from '../../types.js';

export const CSU_C09: HL7MessageDefinition = {
  desc: 'Automated time intervals for reporting, like monthly',
  segments: {
    MSH: {
      idx: 0,
      min: 1,
      max: 1,
      desc: 'Message header segment',
    },
    PATIENT: {
      idx: 1,
      min: 1,
      desc: 'Patient',
      segments: {
        PID: {
          idx: 0,
          min: 1,
          max: 1,
          desc: 'Patient identification',
        },
        PD1: {
          idx: 1,
          max: 1,
          desc: 'Patient demographic',
        },
        NTE: {
          idx: 2,
          desc: 'Notes and comments segment',
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
              desc: 'Patient visit',
            },
            PV2: {
              idx: 1,
              max: 1,
              desc: 'Patient visit - additional information',
            },
          },
        },
        CSR: {
          idx: 4,
          min: 1,
          max: 1,
          desc: 'Clinical study registration',
        },
        STUDY_PHASE: {
          idx: 5,
          min: 1,
          desc: 'Study phase',
          segments: {
            CSP: {
              idx: 0,
              max: 1,
              desc: 'Clinical study phase',
            },
            STUDY_SCHEDULE: {
              idx: 1,
              min: 1,
              desc: 'Study schedule',
              segments: {
                CSS: {
                  idx: 0,
                  max: 1,
                  desc: 'Clinical study data schedule',
                },
                STUDY_OBSERVATION: {
                  idx: 1,
                  desc: 'Study observation',
                  segments: {
                    ORC: {
                      idx: 0,
                      max: 1,
                      desc: 'Common order segment',
                    },
                    OBR: {
                      idx: 1,
                      min: 1,
                      max: 1,
                      desc: 'Observation request segment',
                    },
                    OBX: {
                      idx: 2,
                      min: 1,
                      desc: 'Observation segment',
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
                      desc: 'Common order segment',
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
                          desc: 'Pharmacy administration segment',
                        },
                        RXR: {
                          idx: 1,
                          min: 1,
                          max: 1,
                          desc: 'Pharmacy route segment',
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

import { HL7MessageDefinition } from '../../types.js';

export const CSU_C09: HL7MessageDefinition = {
  desc: 'Automated time intervals for reporting, like monthly',
  segments: {
    MSH: {
      idx: 0,
      min: 1,
      max: 1,
      desc: 'MSH - message header segment',
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
          desc: 'PID - patient identification segment',
        },
        PD1: {
          idx: 1,
          max: 1,
          desc: 'Patient Additional Demographic',
        },
        NTE: {
          idx: 2,
          desc: 'NTE - notes and comments segment',
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
              desc: 'PV1 - patient visit segment-',
            },
            PV2: {
              idx: 1,
              max: 1,
              desc: 'PV2 - patient visit - additional information segment',
            },
          },
        },
        CSR: {
          idx: 4,
          min: 1,
          max: 1,
          desc: 'CSR - clinical study registration segment',
        },
        STUDY_PHASE: {
          idx: 5,
          min: 1,
          desc: 'Study phase',
          segments: {
            CSP: {
              idx: 0,
              max: 1,
              desc: 'CSP - clinical study phase segment',
            },
            STUDY_SCHEDULE: {
              idx: 1,
              min: 1,
              desc: 'Study schedule',
              segments: {
                CSS: {
                  idx: 0,
                  max: 1,
                  desc: 'CSS - clinical study data schedule segment',
                },
                STUDY_OBSERVATION: {
                  idx: 1,
                  min: 1,
                  desc: 'Study observation',
                  segments: {
                    ORC: {
                      idx: 0,
                      max: 1,
                      desc: 'ORC - common order segment',
                    },
                    OBR: {
                      idx: 1,
                      min: 1,
                      max: 1,
                      desc: 'OBR - observation request segment',
                    },
                    OBX: {
                      idx: 2,
                      min: 1,
                      desc: 'OBX - observation/result segment',
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
                      desc: 'ORC - common order segment',
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
                          desc: 'RXA - pharmacy/treatment administration segment',
                        },
                        RXR: {
                          idx: 1,
                          min: 1,
                          max: 1,
                          desc: 'RXR - pharmacy/treatment route segment',
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

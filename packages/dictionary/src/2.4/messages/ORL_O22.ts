import { HL7MessageDefinition } from '../../types.js';

export const ORL_O22: HL7MessageDefinition = {
  desc: 'Response message to oml',
  segments: {
    MSH: {
      idx: 0,
      min: 1,
      max: 1,
      desc: 'Message header',
    },
    MSA: {
      idx: 1,
      min: 1,
      max: 1,
      desc: 'Message acknowledgment',
    },
    ERR: {
      idx: 2,
      max: 1,
      desc: 'Error',
    },
    NTE: {
      idx: 3,
      desc: 'Notes and comments',
    },
    RESPONSE: {
      idx: 4,
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
              desc: 'Patient identification',
            },
            GENERAL_ORDER: {
              idx: 1,
              min: 1,
              desc: 'General order',
              segments: {
                CONTAINER: {
                  idx: 0,
                  max: 1,
                  desc: 'Container',
                  segments: {
                    SAC: {
                      idx: 0,
                      min: 1,
                      max: 1,
                      desc: 'Specimen and container detail',
                    },
                    OBX: {
                      idx: 1,
                      desc: 'Observation/result',
                    },
                  },
                },
                ORDER: {
                  idx: 1,
                  desc: 'Order',
                  segments: {
                    ORC: {
                      idx: 0,
                      min: 1,
                      max: 1,
                      desc: 'Common order',
                    },
                    OBSERVATION_REQUEST: {
                      idx: 1,
                      max: 1,
                      desc: 'Observation request',
                      segments: {
                        OBR: {
                          idx: 0,
                          min: 1,
                          max: 1,
                          desc: 'Observation request',
                        },
                        SAC: {
                          idx: 1,
                          desc: 'Specimen and container detail',
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

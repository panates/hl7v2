import { HL7MessageDefinition } from '../../types.js';

export const ORL_O34: HL7MessageDefinition = {
  desc: 'Laboratory acknowledgment message',
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
    NTE: {
      idx: 4,
      desc: 'Notes and Comments (for Header)',
    },
    RESPONSE: {
      idx: 5,
      max: 1,
      desc: 'Response',
      segments: {
        PID: {
          idx: 0,
          min: 1,
          max: 1,
          desc: 'Patient Identification',
        },
        SPECIMEN: {
          idx: 1,
          min: 1,
          desc: 'Specimen',
          segments: {
            SPM: {
              idx: 0,
              min: 1,
              max: 1,
              desc: 'Specimen',
            },
            OBX: {
              idx: 1,
              desc: 'Observations related to specimen',
            },
            SAC: {
              idx: 2,
              desc: 'Specimen Container',
            },
            ORDER: {
              idx: 3,
              desc: 'Order',
              segments: {
                ORC: {
                  idx: 0,
                  min: 1,
                  max: 1,
                  desc: 'Common Order',
                },
                TIMING: {
                  idx: 1,
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
                  idx: 2,
                  max: 1,
                  desc: 'Observation request',
                  segments: {
                    OBR: {
                      idx: 0,
                      min: 1,
                      max: 1,
                      desc: 'Observation Request',
                    },
                    ROL: {
                      idx: 1,
                      desc: 'Role (for Observation)',
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

import { HL7MessageDefinition } from '../../types.js';

export const OPR_O38: HL7MessageDefinition = {
  desc: 'Population/Location-Based Laboratory Order Acknowledgment',
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
    UAC: {
      idx: 4,
      max: 1,
      desc: 'User Authentication Credential',
    },
    NTE: {
      idx: 5,
      desc: 'Notes and Comments (for Header)',
    },
    RESPONSE: {
      idx: 6,
      max: 1,
      desc: 'Response',
      segments: {
        ORDER: {
          idx: 0,
          min: 1,
          desc: 'Order',
          segments: {
            NK1: {
              idx: 0,
              min: 1,
              desc: 'Next of Kin',
            },
            PID: {
              idx: 1,
              max: 1,
              desc: 'Patient Identification',
            },
            SPECIMEN: {
              idx: 2,
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
                OBSERVATION_REQUEST: {
                  idx: 3,
                  desc: 'Observation request',
                  segments: {
                    ORC: {
                      idx: 0,
                      min: 1,
                      max: 1,
                      desc: 'Common Order',
                    },
                    OBR: {
                      idx: 1,
                      min: 1,
                      max: 1,
                      desc: 'Observation Request',
                    },
                    ROL: {
                      idx: 2,
                      desc: 'Role (for Observation)',
                    },
                  },
                },
                TIMING: {
                  idx: 4,
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
              },
            },
          },
        },
      },
    },
  },
};

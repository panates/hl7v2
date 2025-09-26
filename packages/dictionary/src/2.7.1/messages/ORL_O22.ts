import { HL7MessageDefinition } from '../../types.js';

export const ORL_O22: HL7MessageDefinition = {
  desc: 'General Laboratory Order Acknowledgment Message',
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
        PID: {
          idx: 0,
          min: 1,
          max: 1,
          desc: 'Patient Identification',
        },
        PRT: {
          idx: 1,
          desc: 'Participation (for Patient)',
        },
        ORDER: {
          idx: 2,
          desc: 'Order',
          segments: {
            ORC: {
              idx: 0,
              min: 1,
              max: 1,
              desc: 'Common Order',
            },
            PRT: {
              idx: 1,
              desc: 'Participation (for COMMON_ORDER)',
            },
            TIMING: {
              idx: 2,
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
              idx: 3,
              max: 1,
              desc: 'Observation Request',
              segments: {
                OBR: {
                  idx: 0,
                  min: 1,
                  max: 1,
                  desc: 'Observation Request',
                },
                PRT: {
                  idx: 1,
                  desc: 'Participation (for Observation Request)',
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
                    SAC: {
                      idx: 1,
                      desc: 'Specimen Container Details',
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

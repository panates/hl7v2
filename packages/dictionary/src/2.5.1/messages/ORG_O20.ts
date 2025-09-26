import { HL7MessageDefinition } from '../../types.js';

export const ORG_O20: HL7MessageDefinition = {
  desc: 'General clinical order response',
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
      desc: 'Error',
    },
    SFT: {
      idx: 3,
      desc: 'Software segment',
    },
    NTE: {
      idx: 4,
      desc: 'Notes and comments',
    },
    RESPONSE: {
      idx: 5,
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
            NTE: {
              idx: 1,
              desc: 'Notes and comments',
            },
          },
        },
        ORDER: {
          idx: 1,
          min: 1,
          desc: 'Order',
          segments: {
            ORC: {
              idx: 0,
              min: 1,
              max: 1,
              desc: 'Common order',
            },
            TIMING: {
              idx: 1,
              desc: 'Timing',
              segments: {
                TQ1: {
                  idx: 0,
                  min: 1,
                  max: 1,
                  desc: 'Timing/quantity',
                },
                TQ2: {
                  idx: 1,
                  desc: 'Timing/quantity relationship',
                },
              },
            },
            OBR: {
              idx: 2,
              max: 1,
              desc: 'Observation request',
            },
            NTE: {
              idx: 3,
              desc: 'Notes and comments',
            },
            CTI: {
              idx: 4,
              desc: 'Clinical trial identification',
            },
            SPECIMEN: {
              idx: 5,
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
                  desc: 'Specimen container detail',
                },
              },
            },
          },
        },
      },
    },
  },
};

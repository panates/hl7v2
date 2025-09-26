import { HL7MessageDefinition } from '../../types.js';

export const OUL_R22: HL7MessageDefinition = {
  desc: 'Unsolicited laboratory observation message',
  segments: {
    MSH: {
      idx: 0,
      min: 1,
      max: 1,
      desc: 'Message header',
    },
    SFT: {
      idx: 1,
      desc: 'Software segment',
    },
    NTE: {
      idx: 2,
      max: 1,
      desc: 'Notes and comments',
    },
    PATIENT: {
      idx: 3,
      max: 1,
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
          desc: 'Patient additional demographic',
        },
        NTE: {
          idx: 2,
          desc: 'Notes and comments',
        },
      },
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
          desc: 'Patient visit',
        },
        PV2: {
          idx: 1,
          max: 1,
          desc: 'Patient visit - additional information',
        },
      },
    },
    SPECIMEN: {
      idx: 5,
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
          desc: 'Observation/result',
        },
        CONTAINER: {
          idx: 2,
          min: 1,
          max: 1,
          desc: 'Container',
          segments: {
            SAC: {
              idx: 0,
              min: 1,
              max: 1,
              desc: 'Specimen container detail',
            },
            INV: {
              idx: 1,
              max: 1,
              desc: 'Inventory detail',
            },
          },
        },
        ORDER: {
          idx: 3,
          min: 1,
          desc: 'Order',
          segments: {
            OBR: {
              idx: 0,
              min: 1,
              max: 1,
              desc: 'Observation request',
            },
            ORC: {
              idx: 1,
              max: 1,
              desc: 'Common order',
            },
            NTE: {
              idx: 2,
              desc: 'Notes and comments',
            },
            TIMING_QTY: {
              idx: 3,
              desc: 'Timing qty',
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
            RESULT: {
              idx: 4,
              desc: 'Result',
              segments: {
                OBX: {
                  idx: 0,
                  min: 1,
                  max: 1,
                  desc: 'Observation/result',
                },
                TCD: {
                  idx: 1,
                  max: 1,
                  desc: 'Test code detail',
                },
                SID: {
                  idx: 2,
                  desc: 'Substance identifier',
                },
                NTE: {
                  idx: 3,
                  desc: 'Notes and comments',
                },
              },
            },
            CTI: {
              idx: 5,
              desc: 'Clinical trial identification',
            },
          },
        },
      },
    },
    DSC: {
      idx: 6,
      max: 1,
      desc: 'Continuation pointer',
    },
  },
};

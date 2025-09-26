import { HL7MessageDefinition } from '../../types.js';

export const OUL_R21: HL7MessageDefinition = {
  desc: 'Unsolicited laboratory observation',
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
    ORDER_OBSERVATION: {
      idx: 5,
      min: 1,
      desc: 'Order observation',
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
              desc: 'Specimen container detail',
            },
            SID: {
              idx: 1,
              max: 1,
              desc: 'Substance identifier',
            },
          },
        },
        ORC: {
          idx: 1,
          max: 1,
          desc: 'Common order',
        },
        OBR: {
          idx: 2,
          min: 1,
          max: 1,
          desc: 'Observation request',
        },
        NTE: {
          idx: 3,
          desc: 'Notes and comments',
        },
        TIMING_QTY: {
          idx: 4,
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
        OBSERVATION: {
          idx: 5,
          min: 1,
          desc: 'Observation',
          segments: {
            OBX: {
              idx: 0,
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
          idx: 6,
          desc: 'Clinical trial identification',
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

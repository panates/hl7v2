import { HL7MessageDefinition } from '../../types.js';

export const ORU_R30: HL7MessageDefinition = {
  desc: 'Unsolicited transmission of an observation message',
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
    PID: {
      idx: 2,
      min: 1,
      max: 1,
      desc: 'Patient identification',
    },
    PD1: {
      idx: 3,
      max: 1,
      desc: 'Patient additional demographic',
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
    ORC: {
      idx: 5,
      min: 1,
      max: 1,
      desc: 'Common order',
    },
    OBR: {
      idx: 6,
      min: 1,
      max: 1,
      desc: 'Observation request',
    },
    NTE: {
      idx: 7,
      desc: 'Notes and comments',
    },
    TIMING_QTY: {
      idx: 8,
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
      idx: 9,
      min: 1,
      desc: 'Observation',
      segments: {
        OBX: {
          idx: 0,
          min: 1,
          max: 1,
          desc: 'Observation/result',
        },
        NTE: {
          idx: 1,
          desc: 'Notes and comments',
        },
      },
    },
  },
};

import { HL7MessageDefinition } from '../../types.js';

export const ORU_R31: HL7MessageDefinition = {
  desc: 'Unsolicited transmission of an observation message',
  segments: {
    MSH: {
      idx: 0,
      min: 1,
      max: 1,
      desc: 'Message Header',
    },
    SFT: {
      idx: 1,
      desc: 'Software Segment',
    },
    UAC: {
      idx: 2,
      max: 1,
      desc: 'User Authentication Credential',
    },
    PID: {
      idx: 3,
      min: 1,
      max: 1,
      desc: 'Patient Identification',
    },
    PD1: {
      idx: 4,
      max: 1,
      desc: 'Additional Demographics',
    },
    OBX: {
      idx: 5,
      desc: 'Observation (for Patient ID)',
    },
    VISIT: {
      idx: 6,
      max: 1,
      desc: 'Visit',
      segments: {
        PV1: {
          idx: 0,
          min: 1,
          max: 1,
          desc: 'Patient Visit',
        },
        PV2: {
          idx: 1,
          max: 1,
          desc: 'Patient Visit - Additional',
        },
      },
    },
    ORC: {
      idx: 7,
      min: 1,
      max: 1,
      desc: 'Common Order information',
    },
    OBR: {
      idx: 8,
      min: 1,
      max: 1,
      desc: 'Observation Request',
    },
    NTE: {
      idx: 9,
      desc: 'Notes or Comments for order/result',
    },
    ROL: {
      idx: 10,
      desc: 'Role (for observation)',
    },
    TIMING_QTY: {
      idx: 11,
      desc: 'Timing qty',
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
    OBSERVATION: {
      idx: 12,
      min: 1,
      desc: 'Observation',
      segments: {
        OBX: {
          idx: 0,
          min: 1,
          max: 1,
          desc: 'Observation Results, one per reported value',
        },
        NTE: {
          idx: 1,
          desc: 'Notes or Comments for individual result',
        },
      },
    },
  },
};

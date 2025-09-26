import { HL7MessageDefinition } from '../../types.js';

export const MDM_T09: HL7MessageDefinition = {
  desc: 'Document Replacement Notification',
  segments: {
    SFT: {
      idx: 0,
      desc: 'Software Segment',
    },
    UAC: {
      idx: 1,
      max: 1,
      desc: 'User Authentication Credential',
    },
    EVN: {
      idx: 2,
      min: 1,
      max: 1,
      desc: 'Event Type',
    },
    PID: {
      idx: 3,
      min: 1,
      max: 1,
      desc: 'Patient Identification',
    },
    PV1: {
      idx: 4,
      min: 1,
      max: 1,
      desc: 'Patient Visit',
    },
    COMMON_ORDER: {
      idx: 5,
      desc: 'Common order',
      segments: {
        ORC: {
          idx: 0,
          min: 1,
          max: 1,
          desc: 'Common order segment',
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
        OBR: {
          idx: 2,
          min: 1,
          max: 1,
          desc: 'Observation request segment',
        },
        NTE: {
          idx: 3,
          desc: 'Notes and comments about the OBR',
        },
      },
    },
    TXA: {
      idx: 6,
      min: 1,
      max: 1,
      desc: 'Document Notification',
    },
  },
};

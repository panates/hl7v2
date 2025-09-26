import { HL7MessageDefinition } from '../../types.js';

export const MDM_T05: HL7MessageDefinition = {
  desc: 'Document Addendum Notification',
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
    EVN: {
      idx: 3,
      min: 1,
      max: 1,
      desc: 'Event Type',
    },
    PID: {
      idx: 4,
      min: 1,
      max: 1,
      desc: 'Patient Identification',
    },
    PV1: {
      idx: 5,
      min: 1,
      max: 1,
      desc: 'Patient Visit',
    },
    COMMON_ORDER: {
      idx: 6,
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
      idx: 7,
      min: 1,
      max: 1,
      desc: 'Document Notification',
    },
  },
};

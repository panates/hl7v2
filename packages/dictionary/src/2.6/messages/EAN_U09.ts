import { HL7MessageDefinition } from '../../types.js';

export const EAN_U09: HL7MessageDefinition = {
  desc: 'Automated equipment notification',
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
    EQU: {
      idx: 3,
      min: 1,
      max: 1,
      desc: 'Equipment Detail',
    },
    NOTIFICATION: {
      idx: 4,
      min: 1,
      desc: 'Notification',
      segments: {
        NDS: {
          idx: 0,
          min: 1,
          max: 1,
          desc: 'Notification Detail',
        },
        NTE: {
          idx: 1,
          max: 1,
          desc: 'Notification Note',
        },
      },
    },
    ROL: {
      idx: 5,
      max: 1,
      desc: 'Role Detail',
    },
  },
};

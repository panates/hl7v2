import { HL7MessageDefinition } from '../../types.js';

export const EAN_U09: HL7MessageDefinition = {
  desc: 'Automated equipment notification',
  segments: {
    MSH: {
      idx: 0,
      min: 1,
      max: 1,
      desc: 'Message header',
    },
    EQU: {
      idx: 1,
      min: 1,
      max: 1,
      desc: 'Equipment detail',
    },
    NOTIFICATION: {
      idx: 2,
      min: 1,
      desc: 'Notification',
      segments: {
        NDS: {
          idx: 0,
          min: 1,
          max: 1,
          desc: 'Notification detail',
        },
        NTE: {
          idx: 1,
          max: 1,
          desc: 'Notes and comments',
        },
      },
    },
    ROL: {
      idx: 3,
      max: 1,
      desc: 'Role',
    },
  },
};

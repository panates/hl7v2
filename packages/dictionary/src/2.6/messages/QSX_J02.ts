import { HL7MessageDefinition } from '../../types.js';

export const QSX_J02: HL7MessageDefinition = {
  desc: 'Cancel subscription/acknowledge message',
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
    QID: {
      idx: 3,
      min: 1,
      max: 1,
      desc: 'Query identification Segment',
    },
  },
};

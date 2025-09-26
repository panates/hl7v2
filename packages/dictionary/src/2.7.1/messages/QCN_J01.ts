import { HL7MessageDefinition } from '../../types.js';

export const QCN_J01: HL7MessageDefinition = {
  desc: 'Cancel Query',
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

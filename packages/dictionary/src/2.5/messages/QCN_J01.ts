import { HL7MessageDefinition } from '../../types.js';

export const QCN_J01: HL7MessageDefinition = {
  desc: 'Cancel query/acknowledge message',
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
    QID: {
      idx: 2,
      min: 1,
      max: 1,
      desc: 'Query identification',
    },
  },
};

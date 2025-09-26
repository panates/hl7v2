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
    QID: {
      idx: 1,
      min: 1,
      max: 1,
      desc: 'Query identification',
    },
  },
};

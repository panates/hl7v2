import { HL7MessageDefinition } from '../../types.js';

export const QCK_Q02: HL7MessageDefinition = {
  desc: 'Deferred query',
  segments: {
    MSH: {
      idx: 0,
      min: 1,
      max: 1,
      desc: 'MSH - message header segment',
    },
    MSA: {
      idx: 1,
      min: 1,
      max: 1,
      desc: 'MSA - message acknowledgment segment',
    },
    ERR: {
      idx: 2,
      max: 1,
      desc: 'ERR - error segment',
    },
    QAK: {
      idx: 3,
      max: 1,
      desc: 'Query Acknowledgement',
    },
  },
};

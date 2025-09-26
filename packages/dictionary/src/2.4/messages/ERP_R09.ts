import { HL7MessageDefinition } from '../../types.js';

export const ERP_R09: HL7MessageDefinition = {
  desc: 'Event replay response',
  segments: {
    MSH: {
      idx: 0,
      min: 1,
      max: 1,
      desc: 'Message header',
    },
    MSA: {
      idx: 1,
      min: 1,
      max: 1,
      desc: 'Message acknowledgment',
    },
    ERR: {
      idx: 2,
      max: 1,
      desc: 'Error',
    },
    QAK: {
      idx: 3,
      min: 1,
      max: 1,
      desc: 'Query acknowledgment',
    },
    ERQ: {
      idx: 4,
      min: 1,
      max: 1,
      desc: 'Event replay query',
    },
    DSC: {
      idx: 5,
      max: 1,
      desc: 'Continuation pointer',
    },
  },
};

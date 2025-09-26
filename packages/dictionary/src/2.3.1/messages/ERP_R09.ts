import { HL7MessageDefinition } from '../../types.js';

export const ERP_R09: HL7MessageDefinition = {
  desc: 'Event replay response',
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
      min: 1,
      max: 1,
      desc: 'Query Acknowledgement',
    },
    ERQ: {
      idx: 4,
      min: 1,
      max: 1,
      desc: 'ERQ - event replay query segment',
    },
    DSC: {
      idx: 5,
      max: 1,
      desc: 'DSC - Continuation pointer segment',
    },
  },
};

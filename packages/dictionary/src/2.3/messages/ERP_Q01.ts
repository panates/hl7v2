import { HL7MessageDefinition } from '../../types.js';

export const ERP_Q01: HL7MessageDefinition = {
  desc: 'Erp message',
  segments: {
    MSH: {
      idx: 0,
      min: 1,
      max: 1,
      desc: 'Message header segment',
    },
    MSA: {
      idx: 1,
      min: 1,
      max: 1,
      desc: 'Message acknowledgement segment',
    },
    ERR: {
      idx: 2,
      max: 1,
      desc: 'Error segment',
    },
    QAK: {
      idx: 3,
      min: 1,
      max: 1,
      desc: 'Query acknowledgement',
    },
    ERQ: {
      idx: 4,
      min: 1,
      max: 1,
      desc: 'Event replay query segment',
    },
    DSC: {
      idx: 5,
      max: 1,
      desc: 'Continuation pointer segment',
    },
  },
};

import { HL7MessageDefinition } from '../../types.js';

export const TBR_Q01: HL7MessageDefinition = {
  desc: 'Tabular data response',
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
    RDF: {
      idx: 4,
      min: 1,
      max: 1,
      desc: 'Table row definition',
    },
    RDT: {
      idx: 5,
      min: 1,
      desc: 'Table row data',
    },
    DSC: {
      idx: 6,
      max: 1,
      desc: 'Continuation pointer segment',
    },
  },
};

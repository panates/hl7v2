import { HL7MessageDefinition } from '../../types.js';

export const TBR_R08: HL7MessageDefinition = {
  desc: 'Tabular data response',
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
    RDF: {
      idx: 4,
      min: 1,
      max: 1,
      desc: 'RDF - table row definition segment',
    },
    RDT: {
      idx: 5,
      min: 1,
      desc: 'RDT - table row data segment',
    },
    DSC: {
      idx: 6,
      max: 1,
      desc: 'DSC - Continuation pointer segment',
    },
  },
};

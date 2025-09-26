import { HL7MessageDefinition } from '../../types.js';

export const TBR_R08: HL7MessageDefinition = {
  desc: 'Tabular data response',
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
    MSA: {
      idx: 2,
      min: 1,
      max: 1,
      desc: 'Message acknowledgment',
    },
    ERR: {
      idx: 3,
      max: 1,
      desc: 'Error',
    },
    QAK: {
      idx: 4,
      min: 1,
      max: 1,
      desc: 'Query acknowledgment',
    },
    RDF: {
      idx: 5,
      min: 1,
      max: 1,
      desc: 'Table row definition',
    },
    RDT: {
      idx: 6,
      min: 1,
      desc: 'Table row data',
    },
    DSC: {
      idx: 7,
      max: 1,
      desc: 'Continuation pointer',
    },
  },
};

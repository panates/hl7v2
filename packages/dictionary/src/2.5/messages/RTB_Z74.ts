import { HL7MessageDefinition } from '../../types.js';

export const RTB_Z74: HL7MessageDefinition = {
  desc: 'Tabular response',
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
      desc: 'Error',
    },
    SFT: {
      idx: 3,
      desc: 'Software segment',
    },
    QAK: {
      idx: 4,
      min: 1,
      max: 1,
      desc: 'Query acknowledgment',
    },
    QPD: {
      idx: 5,
      min: 1,
      max: 1,
      desc: 'Query parameter definition',
    },
    ROW_DEFINITION: {
      idx: 6,
      max: 1,
      desc: 'Row definition',
      segments: {
        RDF: {
          idx: 0,
          min: 1,
          max: 1,
          desc: 'Table row definition',
        },
        RDT: {
          idx: 1,
          desc: 'Table row data',
        },
      },
    },
    DSC: {
      idx: 7,
      max: 1,
      desc: 'Continuation pointer',
    },
  },
};

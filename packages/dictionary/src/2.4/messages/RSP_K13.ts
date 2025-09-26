import { HL7MessageDefinition } from '../../types.js';

export const RSP_K13: HL7MessageDefinition = {
  desc: 'Segment pattern response',
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
    QPD: {
      idx: 4,
      min: 1,
      max: 1,
      desc: 'Query parameter definition',
    },
    ROW_DEFINITION: {
      idx: 5,
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
      idx: 6,
      max: 1,
      desc: 'Continuation pointer',
    },
  },
};

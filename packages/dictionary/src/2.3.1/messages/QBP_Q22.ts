import { HL7MessageDefinition } from '../../types.js';

export const QBP_Q22: HL7MessageDefinition = {
  desc: 'Query - Find Candidates',
  segments: {
    MSH: {
      idx: 0,
      min: 1,
      max: 1,
      desc: 'Message Header',
    },
    QPD: {
      idx: 1,
      min: 1,
      max: 1,
      desc: 'Query Parameter Definition Segment',
    },
    RCP: {
      idx: 2,
      min: 1,
      max: 1,
      desc: 'Response Control Parameters',
    },
    DSC: {
      idx: 3,
      max: 1,
      desc: 'Continuation Pointer',
    },
  },
};

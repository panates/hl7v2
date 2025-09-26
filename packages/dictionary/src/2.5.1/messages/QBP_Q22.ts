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
    SFT: {
      idx: 1,
      desc: 'Software Segment',
    },
    QPD: {
      idx: 2,
      min: 1,
      max: 1,
      desc: 'Query Parameter Definition Segment',
    },
    RCP: {
      idx: 3,
      min: 1,
      max: 1,
      desc: 'Response Control Parameters',
    },
    DSC: {
      idx: 4,
      max: 1,
      desc: 'Continuation Pointer',
    },
  },
};

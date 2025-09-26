import { HL7MessageDefinition } from '../../types.js';

export const QBP_Q13: HL7MessageDefinition = {
  desc: 'Query by parameter',
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
    UAC: {
      idx: 2,
      max: 1,
      desc: 'User Authentication Credential',
    },
    EVN: {
      idx: 3,
      max: 1,
      desc: 'Event Type',
    },
    QPD: {
      idx: 4,
      min: 1,
      max: 1,
      desc: 'Query Parameter Definition Segment',
    },
    RDF: {
      idx: 5,
      max: 1,
      desc: 'Table Row Definition Segment',
    },
    RCP: {
      idx: 6,
      min: 1,
      max: 1,
      desc: 'Response Control Parameters',
    },
    DSC: {
      idx: 7,
      max: 1,
      desc: 'Continuation Pointer',
    },
  },
};

import { HL7MessageDefinition } from '../../types.js';

export const QBP_Z95: HL7MessageDefinition = {
  desc: 'Query by parameter',
  segments: {
    MSH: {
      idx: 0,
      min: 1,
      max: 1,
      desc: 'Message Header Segment',
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
    QPD: {
      idx: 3,
      min: 1,
      max: 1,
      desc: 'Query Parameter Definition',
    },
    RDF: {
      idx: 4,
      max: 1,
      desc: 'Table Row Definition Segment',
    },
    RCP: {
      idx: 5,
      min: 1,
      max: 1,
      desc: 'Response Control Parameter',
    },
    DSC: {
      idx: 6,
      max: 1,
      desc: 'Continuation Pointer',
    },
  },
};

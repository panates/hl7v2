import { HL7MessageDefinition } from '../../types.js';

export const QBP_Z77: HL7MessageDefinition = {
  desc: 'Query Grammar:  QBP Message',
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
    PID: {
      idx: 4,
      min: 1,
      max: 1,
      desc: 'Patient Identification Segment',
    },
    RCP: {
      idx: 5,
      min: 1,
      max: 1,
      desc: 'Response Control Parameter',
    },
    RDF: {
      idx: 6,
      max: 1,
      desc: 'Table Row Definition Segment',
    },
    DSC: {
      idx: 7,
      max: 1,
      desc: 'Continuation Pointer',
    },
  },
};

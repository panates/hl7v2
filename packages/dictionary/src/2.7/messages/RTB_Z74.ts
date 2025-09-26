import { HL7MessageDefinition } from '../../types.js';

export const RTB_Z74: HL7MessageDefinition = {
  desc: 'Personnel Information Message',
  segments: {
    MSH: {
      idx: 0,
      min: 1,
      max: 1,
      desc: 'Message Header',
    },
    MSA: {
      idx: 1,
      min: 1,
      max: 1,
      desc: 'Message Acknowledgement',
    },
    ERR: {
      idx: 2,
      desc: 'Error',
    },
    SFT: {
      idx: 3,
      desc: 'Software',
    },
    UAC: {
      idx: 4,
      max: 1,
      desc: 'User Authentication Credential',
    },
    QAK: {
      idx: 5,
      min: 1,
      max: 1,
      desc: 'Query Acknowledgement',
    },
    QPD: {
      idx: 6,
      min: 1,
      max: 1,
      desc: 'Query Parameter Definition',
    },
    ROW_DEFINITION: {
      idx: 7,
      max: 1,
      desc: 'Row Definition',
      segments: {
        RDF: {
          idx: 0,
          min: 1,
          max: 1,
          desc: 'Table Row Definition Segment',
        },
        RDT: {
          idx: 1,
          desc: 'Table Row Data Segment',
        },
      },
    },
    DSC: {
      idx: 8,
      max: 1,
      desc: 'Continuation Pointer',
    },
  },
};

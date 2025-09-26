import { HL7MessageDefinition } from '../../types.js';

export const RDY_K15: HL7MessageDefinition = {
  desc: 'Display Based Response',
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
    MSA: {
      idx: 3,
      min: 1,
      max: 1,
      desc: 'Message Acknowledgement',
    },
    ERR: {
      idx: 4,
      max: 1,
      desc: 'Error',
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
      desc: 'Query Parameter Definition Segment',
    },
    DSP: {
      idx: 7,
      desc: 'Display Data',
    },
    DSC: {
      idx: 8,
      max: 1,
      desc: 'Continuation Pointer',
    },
  },
};

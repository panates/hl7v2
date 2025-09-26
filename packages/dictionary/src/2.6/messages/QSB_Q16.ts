import { HL7MessageDefinition } from '../../types.js';

export const QSB_Q16: HL7MessageDefinition = {
  desc: 'Create subscription',
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
    QPD: {
      idx: 3,
      min: 1,
      max: 1,
      desc: 'Query Parameter Definition',
    },
    RCP: {
      idx: 4,
      min: 1,
      max: 1,
      desc: 'Response Control Parameters',
    },
    DSC: {
      idx: 5,
      max: 1,
      desc: 'Continuation Pointer',
    },
  },
};

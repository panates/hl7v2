import { HL7MessageDefinition } from '../../types.js';

export const ACK: HL7MessageDefinition = {
  desc: 'General acknowledgment message',
  segments: {
    MSH: {
      idx: 0,
      min: 1,
      max: 1,
      desc: 'Message header',
    },
    SFT: {
      idx: 1,
      desc: 'Software segment',
    },
    MSA: {
      idx: 2,
      min: 1,
      max: 1,
      desc: 'Message acknowledgment',
    },
    ERR: {
      idx: 3,
      desc: 'Error',
    },
  },
};

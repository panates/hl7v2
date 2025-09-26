import { HL7MessageDefinition } from '../../types.js';

export const ADT_A20: HL7MessageDefinition = {
  desc: 'Bed Status Update',
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
      min: 1,
      max: 1,
      desc: 'Event Type',
    },
    NPU: {
      idx: 4,
      min: 1,
      max: 1,
      desc: 'Non-Patient Update',
    },
  },
};

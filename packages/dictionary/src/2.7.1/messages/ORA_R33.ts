import { HL7MessageDefinition } from '../../types.js';

export const ORA_R33: HL7MessageDefinition = {
  desc: 'Observation Report Acknowledgement',
  segments: {
    MSH: {
      idx: 0,
      min: 1,
      max: 1,
      desc: 'Message Acknowledgment',
    },
    SFT: {
      idx: 1,
      desc: 'Software segment',
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
      desc: 'Message Acknowledgment',
    },
    ERR: {
      idx: 4,
      desc: 'Error',
    },
    ORC: {
      idx: 5,
      max: 1,
      desc: 'COMMON_ORDER Information',
    },
  },
};

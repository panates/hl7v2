import { HL7MessageDefinition } from '../../types.js';

export const QRY_R02: HL7MessageDefinition = {
  desc: 'Query for results of observation',
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
    QRD: {
      idx: 3,
      min: 1,
      max: 1,
      desc: 'Query Definition',
    },
    QRF: {
      idx: 4,
      min: 1,
      max: 1,
      desc: 'Query Filter',
    },
  },
};

import { HL7MessageDefinition } from '../../types.js';

export const QBP_E22: HL7MessageDefinition = {
  desc: 'Query Authorization Request Status',
  segments: {
    MSH: {
      idx: 0,
      min: 1,
      max: 1,
      desc: 'Message Header',
    },
    SFT: {
      idx: 1,
      desc: 'Software',
    },
    UAC: {
      idx: 2,
      desc: 'User Authentication Credential',
    },
    QUERY: {
      idx: 3,
      min: 1,
      max: 1,
      desc: 'Query',
      segments: {
        QPD: {
          idx: 0,
          min: 1,
          max: 1,
          desc: 'Query Parameter Definition',
        },
        RCP: {
          idx: 1,
          min: 1,
          max: 1,
          desc: 'Response Control Parameter',
        },
      },
    },
  },
};

import { HL7MessageDefinition } from '../../types.js';

export const QBP_E03: HL7MessageDefinition = {
  desc: 'Query HealthCare Services Invoice',
  segments: {
    MSH: {
      idx: 0,
      min: 1,
      max: 1,
      desc: 'Message Header',
    },
    SFT: {
      idx: 1,
      desc: 'Secondary Header',
    },
    UAC: {
      idx: 2,
      desc: 'User Authentication Credential',
    },
    QUERY_INFORMATION: {
      idx: 3,
      min: 1,
      max: 1,
      desc: 'Query Information',
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

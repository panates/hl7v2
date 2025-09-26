import { HL7MessageDefinition } from '../../types.js';

export const RSP_Q11: HL7MessageDefinition = {
  desc: 'Segment pattern response',
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
    QAK: {
      idx: 4,
      min: 1,
      max: 1,
      desc: 'Query acknowledgment',
    },
    QPD: {
      idx: 5,
      min: 1,
      max: 1,
      desc: 'Query parameter definition',
    },
    QUERY_RESULT_CLUSTER: {
      idx: 6,
      max: 1,
      desc: 'Query result cluster',
      segments: {
        MFE: {
          idx: 0,
          min: 1,
          max: 1,
          desc: 'Master file entry',
        },
        LOC: {
          idx: 1,
          min: 1,
          max: 1,
          desc: 'Location identification',
        },
        LCH: {
          idx: 2,
          desc: 'Location characteristic',
        },
        LRL: {
          idx: 3,
          desc: 'Location relationship',
        },
        MF_LOC_DEPT: {
          idx: 4,
          min: 1,
          desc: 'Mf loc dept',
          segments: {
            LDP: {
              idx: 0,
              min: 1,
              max: 1,
              desc: 'Location department',
            },
            LCH: {
              idx: 1,
              desc: 'Location characteristic',
            },
            LCC: {
              idx: 2,
              desc: 'Location charge code',
            },
          },
        },
      },
    },
    DSC: {
      idx: 7,
      max: 1,
      desc: 'Continuation pointer',
    },
  },
};

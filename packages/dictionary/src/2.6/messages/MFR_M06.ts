import { HL7MessageDefinition } from '../../types.js';

export const MFR_M06: HL7MessageDefinition = {
  desc: 'Master files response',
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
    MSA: {
      idx: 2,
      min: 1,
      max: 1,
      desc: 'Acknowledgment',
    },
    ERR: {
      idx: 3,
      desc: 'Error',
    },
    QAK: {
      idx: 4,
      max: 1,
      desc: 'Query Acknowledgment',
    },
    QRD: {
      idx: 5,
      min: 1,
      max: 1,
      desc: 'Query Definition',
    },
    QRF: {
      idx: 6,
      max: 1,
      desc: 'Query Filter',
    },
    MFI: {
      idx: 7,
      min: 1,
      max: 1,
      desc: 'Master File Name',
    },
    MF_QUERY: {
      idx: 8,
      min: 1,
      desc: 'Mf query',
      segments: {
        MFE: {
          idx: 0,
          min: 1,
          max: 1,
          desc: 'Master File Entry',
        },
        CM0: {
          idx: 1,
          min: 1,
          max: 1,
          desc: 'Clinical Study Master',
        },
        MF_CLINICAL_STUDY: {
          idx: 2,
          desc: 'Mf clinical study',
          segments: {
            CM1: {
              idx: 0,
              min: 1,
              max: 1,
              desc: 'Clinical Study Phase',
            },
            CM2: {
              idx: 1,
              desc: 'Clinical Study Schedule',
            },
          },
        },
      },
    },
    DSC: {
      idx: 9,
      max: 1,
      desc: 'Continuation',
    },
  },
};

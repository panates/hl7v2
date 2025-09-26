import { HL7MessageDefinition } from '../../types.js';

export const MFR_M04: HL7MessageDefinition = {
  desc: 'Master files response',
  segments: {
    QRD: {
      idx: 0,
      min: 1,
      max: 1,
      desc: 'Query Definition',
    },
    QRF: {
      idx: 1,
      max: 1,
      desc: 'Query Filter',
    },
    MFI: {
      idx: 2,
      min: 1,
      max: 1,
      desc: 'Master File Name',
    },
    MF_QUERY: {
      idx: 3,
      min: 1,
      desc: 'Mf query',
      segments: {
        MFE: {
          idx: 0,
          min: 1,
          max: 1,
          desc: 'Master File Entry',
        },
        CDM: {
          idx: 1,
          min: 1,
          max: 1,
          desc: 'Charge Description Master',
        },
        PRC: {
          idx: 2,
          desc: 'Pricing',
        },
      },
    },
    DSC: {
      idx: 4,
      max: 1,
      desc: 'Continuation',
    },
  },
};

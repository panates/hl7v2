import { HL7MessageDefinition } from '../../types.js';

export const MFN_M01: HL7MessageDefinition = {
  desc: 'Master file not otherwise specified',
  segments: {
    MSH: {
      idx: 0,
      min: 1,
      max: 1,
      desc: 'Message header segment',
    },
    MFI: {
      idx: 1,
      min: 1,
      max: 1,
      desc: 'Master file identification segment',
    },
    MF: {
      idx: 2,
      min: 1,
      desc: 'Mf',
      segments: {
        MFE: {
          idx: 0,
          min: 1,
          max: 1,
          desc: 'Master file entry segment',
        },
        GenericSegment: {
          idx: 1,
          max: 1,
          desc: 'Generic segment',
        },
      },
    },
  },
};

import { HL7MessageDefinition } from '../../types.js';

export const VXX_V02: HL7MessageDefinition = {
  desc: 'Response to vaccination query',
  segments: {
    MSH: {
      idx: 0,
      min: 1,
      max: 1,
      desc: 'Message header',
    },
    MSA: {
      idx: 1,
      min: 1,
      max: 1,
      desc: 'Message acknowledgment',
    },
    SFT: {
      idx: 2,
      desc: 'Software segment',
    },
    QRD: {
      idx: 3,
      min: 1,
      max: 1,
      desc: 'Original-style query definition',
    },
    QRF: {
      idx: 4,
      max: 1,
      desc: 'Original style query filter',
    },
    PATIENT: {
      idx: 5,
      min: 1,
      desc: 'Patient',
      segments: {
        PID: {
          idx: 0,
          min: 1,
          max: 1,
          desc: 'Patient identification',
        },
        NK1: {
          idx: 1,
          desc: 'Next of kin / associated parties',
        },
      },
    },
  },
};

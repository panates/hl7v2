import { HL7MessageDefinition } from '../../types.js';

export const VXX_V02: HL7MessageDefinition = {
  desc: 'Response to vaccination query',
  segments: {
    MSH: {
      idx: 0,
      min: 1,
      max: 1,
      desc: 'Message header segment',
    },
    MSA: {
      idx: 1,
      min: 1,
      max: 1,
      desc: 'Message acknowledgement segment',
    },
    QRD: {
      idx: 2,
      min: 1,
      max: 1,
      desc: 'Query definition segment',
    },
    QRF: {
      idx: 3,
      max: 1,
      desc: 'Query filter segment',
    },
    PATIENT: {
      idx: 4,
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
          desc: 'Next of kin',
        },
      },
    },
  },
};

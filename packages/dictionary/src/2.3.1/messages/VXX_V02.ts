import { HL7MessageDefinition } from '../../types.js';

export const VXX_V02: HL7MessageDefinition = {
  desc: 'Response to vaccination query',
  segments: {
    MSH: {
      idx: 0,
      min: 1,
      max: 1,
      desc: 'MSH - message header segment',
    },
    MSA: {
      idx: 1,
      min: 1,
      max: 1,
      desc: 'MSA - message acknowledgment segment',
    },
    QRD: {
      idx: 2,
      min: 1,
      max: 1,
      desc: 'QRD - original-style query definition segment',
    },
    QRF: {
      idx: 3,
      max: 1,
      desc: 'QRF - original style query filter segment',
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
          desc: 'PID - patient identification segment',
        },
        NK1: {
          idx: 1,
          desc: 'NK1 - next of kin / associated parties segment-',
        },
      },
    },
  },
};

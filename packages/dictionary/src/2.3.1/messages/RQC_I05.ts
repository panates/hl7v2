import { HL7MessageDefinition } from '../../types.js';

export const RQC_I05: HL7MessageDefinition = {
  desc: 'Request for patient clinical information',
  segments: {
    MSH: {
      idx: 0,
      min: 1,
      max: 1,
      desc: 'MSH - message header segment',
    },
    QRD: {
      idx: 1,
      min: 1,
      max: 1,
      desc: 'QRD - original-style query definition segment',
    },
    QRF: {
      idx: 2,
      max: 1,
      desc: 'QRF - original style query filter segment',
    },
    PROVIDER: {
      idx: 3,
      min: 1,
      desc: 'Provider',
      segments: {
        PRD: {
          idx: 0,
          min: 1,
          max: 1,
          desc: 'Provider Data',
        },
        CTD: {
          idx: 1,
          desc: 'Contact Data',
        },
      },
    },
    PID: {
      idx: 4,
      min: 1,
      max: 1,
      desc: 'PID - patient identification segment',
    },
    NK1: {
      idx: 5,
      desc: 'NK1 - next of kin / associated parties segment-',
    },
    GT1: {
      idx: 6,
      desc: 'GT1 - guarantor segment',
    },
    NTE: {
      idx: 7,
      desc: 'NTE - notes and comments segment',
    },
  },
};
